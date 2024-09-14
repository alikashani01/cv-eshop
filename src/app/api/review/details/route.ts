import { getSession } from "@/authentication";
import connectDB from "@/db";
import Review from "@/src/models/Review";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const reviewId = new URL(request.url).searchParams.get("reviewId")!;

        const review = await Review.findById(reviewId)
            .populate({
                path: "user",
                model: "User",
                select: { fullName: 1, userType: 1 },
            })
            .populate({
                path: "product",
                model: "Product",
                select: { "name.en": 1, "name.fa": 1 },
            });
        if (!review)
            return NextResponse.json("دیدگاه پیدا نشد!", { status: 404 });

        return NextResponse.json(review, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
