import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        await connectDB();

        await User.findById(session.userId).deleteOne();

        cookies().set("session", "", { expires: new Date(0) });

        return NextResponse.json("حساب کاربری حذف شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.toString(), { status: 500 });
    }
}
