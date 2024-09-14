import { getSession } from "@/authentication";
import connectDB from "@/db";
import User from "@/src/models/User";
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
        if (!user)
            return NextResponse.json("کاربری پیدا نشد!", { status: 400 });

        return NextResponse.json(
            {
                _id: user._id,
                fullName: user.fullName,
                mobile: user.mobile,
                addresses: user.addresses,
                savedProducts: user.savedProducts,
                reviews: user.reviews,
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.toString(), { status: 500 });
    }
}
