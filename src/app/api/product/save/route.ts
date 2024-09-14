import { getSession } from "@/authentication";
import connectDB from "@/db";
import Product from "@/src/models/Product";
import User from "@/src/models/User";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        connectDB();

        const user = await User.findById(session.userId);
        if (!user)
            return NextResponse.json("کاربری پیدا نشد!", { status: 404 });

        const products = await Product.find({
            _id: { $in: user.savedProducts?.map((p) => p) },
        });

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}

export async function PATCH(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session) return NextResponse.json("Unauthorized", { status: 401 });
    try {
        connectDB();
        const url = new URL(request.url);
        const searchParams = url.searchParams;
        const id = searchParams.get("id");

        const user = await User.findById(session.userId);
        if (!user)
            return NextResponse.json("کاربری پیدا نشد!", { status: 404 });
        const product = await Product.findById(id);
        if (!product)
            return NextResponse.json("محصول پیدا نشد!", { status: 404 });

        const objectId = new Types.ObjectId(id!);
        const alreadySaved = user.savedProducts?.includes(objectId);
        user.savedProducts = alreadySaved
            ? user.savedProducts?.filter(
                  (p) => p.toString() !== product._id.toString()
              )
            : [product._id, ...user.savedProducts!];

        await user.save();

        const responseMessage = alreadySaved ? "حذف شد" : "ذخیره شد";
        return NextResponse.json(responseMessage, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
