import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
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

        const body = await request.json();

        if (user.addresses) {
            if (user.addresses.length === 0) {
                user.addresses.push({ ...body, isDefault: true });
            } else {
                user.addresses.push(body);
            }
        }

        await user.save();

        return NextResponse.json("آدرس جدید اضافه شد", { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
