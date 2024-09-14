import { getSession } from "@/authentication";
import connectDB from "@/db";
import Product from "@/src/models/Product";
import Reply from "@/src/models/Reply";
import Review from "@/src/models/Review";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const reviewId = new URL(request.url).searchParams.get("reviewId")!;

        const review = await Review.findById(reviewId);
        if (!review)
            return NextResponse.json("دیدگاه پیدا نشد!", { status: 404 });

        const product = await Product.findById(review.product);
        if (!product)
            return NextResponse.json("محصول پیدا نشد!", { status: 404 });

        await Reply.find({ review: review._id }).deleteMany();

        await review.deleteOne();

        const reviews = await Review.find({ product: review.product });

        if (reviews.length > 0)
            product.rating =
                reviews.reduce((acc, item) => acc + item.rating, 0) /
                reviews.length;
        else product.rating = 0;

        product.reviews = product.reviews?.filter(
            (r) => r.toString() !== reviewId
        );

        user.reviews = user.reviews?.filter((r) => r.toString() !== reviewId);

        await product.save();
        return NextResponse.json("دیدگاه حذف شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
