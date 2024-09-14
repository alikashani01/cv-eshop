import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user)
            return NextResponse.json("کاربری پیدا نشد!", { status: 404 });

        user.set("addresses", []);

        await user.save();

        return NextResponse.json("تمام آدرس‌ها حذف شدند", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
