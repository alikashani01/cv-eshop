import { getSession } from "@/authentication";
import connectDB from "@/db";
import Review from "@/src/models/Review";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const reviewId = new URL(request.url).searchParams.get("reviewId")!;

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const review = await Review.findById(reviewId);
        if (!review)
            return NextResponse.json("دیدگاه پیدا نشد!", { status: 404 });

        const alreadyLiked = review.likes?.find(
            (u) => u.toString() === user._id.toString()
        );

        review.likes = alreadyLiked
            ? review.likes?.filter((u) => u.toString() !== user._id.toString())
            : [user._id, ...(review.likes || [])];

        const alreadyDisLiked = review.likes?.find(
            (u) => u.toString() === user._id.toString()
        );

        if (alreadyDisLiked) {
            review.dislikes = review.dislikes?.filter(
                (u) => u.toString() !== user._id.toString()
            );
        }

        await review.save();

        return NextResponse.json("انجام شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
