import { encrypt } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { addMonths } from "date-fns";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type PersianToEnglishMap = {
    [key: string]: string;
};
const convertPerToEng = (value: string): string => {
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

        const { mobile, otp } = await request.json();
        const convertedMobileNumber = convertPerToEng(mobile);
        const user = await User.findOne({ mobile: convertedMobileNumber });

        const otpCode = convertPerToEng(otp);

        if (!user)
            return NextResponse.json("کاربری با این شماره پیدا نشد!", {
                status: 404,
            });

        if (user.otpCode === otpCode) {
            user.otpCode = "";

            user.otpCodeExpires = 0;

            await user.save();

            const currentDate = new Date();

            const expires = addMonths(currentDate, 1);

            const session = await encrypt({
                userId: String(user._id),
                expires,
            });

            cookies().set("session", session, { expires, httpOnly: true });

            return NextResponse.json("تایید شد", { status: 200 });
        } else {
            return NextResponse.json("کد تایید نامعتبر است", { status: 400 });
        }
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
