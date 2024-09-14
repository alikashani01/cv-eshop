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

        const url = new URL(request.url);
        const searchParams = url.searchParams;

        const sort = searchParams.get("sort") || "جدیدترین";
        let sortOrder: { [key: string]: SortOrder } = {};

        if (sort === "جدیدترین") {
            sortOrder = { createdAt: -1 };
        } else if (sort === "قدیمی‌ترین") {
            sortOrder = { createdAt: 1 };
        } else if (sort === "گران‌ترین") {
            sortOrder = { "prices.total": -1 };
        } else if (sort === "ارزان‌ترین") {
            sortOrder = { "prices.total": 1 };
        } else if (sort === "بیشترین") {
            sortOrder = { items: -1 };
        } else if (sort === "کمترین") {
            sortOrder = { items: 1 };
        } else {
            sortOrder = { createdAt: -1 };
        }

        const orders = await Order.find({ user: user._id }).sort(sortOrder);

        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
