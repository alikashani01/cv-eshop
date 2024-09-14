import { getSession } from "@/authentication";
import connectDB from "@/db";
import Order from "@/src/models/Order";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        await connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد", { status: 404 });

        const id = new URL(request.url).searchParams.get("id");

        const order = await Order.findById(id);
        if (!order) return NextResponse.json("سفارش پیدا نشد", { status: 404 });

        return NextResponse.json(order, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
