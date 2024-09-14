import { getSession } from "@/authentication";
import connectDB from "@/db";
import Order from "@/src/models/Order";
import Product from "@/src/models/Product";
import Review from "@/src/models/Review";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        connectDB();

        const productId = new URL(request.url).searchParams.get("productId")!;

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const product = await Product.findById(productId);
        if (!product)
            return NextResponse.json("محصول پیدا نشد!", { status: 404 });

        const alreadyReviewd = await Review.findOne({
            product: product._id,
            user: user._id,
        });
        if (alreadyReviewd)
            return NextResponse.json(
                "دیدگاه برای این محصول قبلا ثبت شده است!",
                { status: 400 }
            );

        const { title, comment, rating, advantages, disadvantages } =
            await request.json();

        // Handle User Type ...
        const orders = await Order.find({ user: user._id });
        let userType = "";
        orders.map((order) => {
            order.items.map((item) => {
                if (item.product === product._id) {
                    return (userType = "خریدار");
                } else {
                    return (userType = "کاربر");
                }
            });
        });

        const newReview = await Review.create({
            user: user._id,
            userType,
            product: product._id,
            title,
            comment,
            rating,
            advantages,
            disadvantages,
        });

        user.reviews = [newReview._id, ...(user.reviews || [])];
        product.reviews = [newReview._id, ...(product.reviews || [])];

        const reviews = await Review.find({ product: productId });

        product.rating =
            reviews.reduce((acc, item) => acc + item.rating, 0) /
            reviews.length;

        await user.save();
        await product.save();

        return NextResponse.json("دیدگاه شما ثبت شد", { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
