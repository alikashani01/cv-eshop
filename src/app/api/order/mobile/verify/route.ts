import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
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

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        await connectDB();

        const { otp } = await request.json();

        const user = await User.findById(session.userId);

        if (!user)
            return NextResponse.json("کاربری با این شماره پیدا نشد!", {
                status: 404,
            });

        const otpCode = convertPerToEng(otp);

        if (user.otpCode === otpCode) {
            // user.newMobile = "";
            user.otpCode = "";
            user.otpCodeExpires = 0;

            await user.save();

            return NextResponse.json(user.newMobile, {
                status: 200,
            });
        } else {
            return NextResponse.json("کد تایید نامعتبر است", { status: 400 });
        }
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
