import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { KavenegarApi } from "kavenegar";
import { NextRequest, NextResponse } from "next/server";

const api = KavenegarApi({
    apikey: process.env.KAVENEGAR_API_KEY!,
});

const mobileRegex = /^(\+98|0)?9\d{9}$/;

type PersianToEnglishMap = {
    [key: string]: string;
};

const convertMobileNumber = (value: string): string => {
    const persianToEnglishMap: PersianToEnglishMap = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    };

    return value.replace(/./g, (num) => persianToEnglishMap[num] || num);
};

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });

    try {
        await connectDB();

        const { mobile }: { mobile: string } = await request.json();

        const convertedMobileNumber = convertMobileNumber(mobile);

        if (!mobileRegex.test(convertedMobileNumber))
            return NextResponse.json("شماره موبایل نامعبتر است!", {
                status: 400,
            });

        const userExists = await User.findOne({
            mobile: convertedMobileNumber,
        });
        if (userExists)
            return NextResponse.json("شماره موبایل قبلا به ثبت رسیده است!", {
                status: 400,
            });

        const date = new Date();
        const otpCodeExpires = date.getTime() + 1000 * 60 * 30;
        const otpCode = Math.floor(1000 + Math.random() * 9000).toString();

        api.VerifyLookup(
            {
                receptor: convertedMobileNumber,
                token: `Code:${otpCode}`,
                template: "Verification",
            },
            function (res, status) {
                console.log(res);
                console.log(status);
                return NextResponse.json({ error: res }, { status: 400 });
            }
        );

        const user = await User.findById(session.userId);
        if (!user)
            return NextResponse.json("کاربری پیدا نشد!", { status: 404 });

        user.newMobile = convertedMobileNumber;
        user.otpCode = otpCode;
        user.otpCodeExpires = otpCodeExpires;

        await user.save();

        return NextResponse.json(mobile, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.toString(), { status: 500 });
    }
}
