import { getSession } from "@/authentication";
import connectDB from "@/db";
import Order from "@/src/models/Order";
import User from "@/src/models/User";
import { SortOrder } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد", { status: 404 });

        const orders = await Order.find({ user: user._id }).sort({
            createdAt: -1,
        });

        const orderNumbers = {
            active: orders.filter((o) => o.status === "فعال").length || 0,
            delivered:
                orders.filter((o) => o.status === "تحویل شده").length || 0,
            canceled: orders.filter((o) => o.status === "لغو شده").length || 0,
            returned:
                orders.filter((o) => o.status === "مرجوع شده").length || 0,
        };

        return NextResponse.json(orderNumbers, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
