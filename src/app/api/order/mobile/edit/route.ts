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

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { mobile }: { mobile: string } = await request.json();

        const convertedMobileNumber = convertMobileNumber(mobile);

        if (!mobileRegex.test(convertedMobileNumber))
            return NextResponse.json("شماره موبایل نامعبتر است!", {
                status: 400,
            });

        const user = await User.findOne({
            mobile: convertedMobileNumber,
        });

        const date = new Date();
        const otpCodeExpires = date.getTime() + 1000 * 60 * 30;
        const otpCode = Math.floor(1000 + Math.random() * 9000).toString();

        if (!user) {
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

            await User.create({
                mobile: convertedMobileNumber,
                otpCode,
                otpCodeExpires,
            });

            return NextResponse.json(mobile, { status: 201 });
        } else {
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

            user.otpCode = otpCode;
            user.otpCodeExpires = otpCodeExpires;

            await user.save();

            return NextResponse.json(mobile, { status: 200 });
        }
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
