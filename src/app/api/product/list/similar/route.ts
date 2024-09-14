import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    try {
        connectDB();
        const productId = new URL(request.url).searchParams.get("productId");

        const product = await Product.findById(productId);
        if (!product)
            return NextResponse.json("محصول پیدا نشد!", { status: 404 });

        const products = await Product.find({
            "category.en": product.category?.en,
            // "subCategories.en": {
            //     $in: product.subCategories.map((sc) => sc.en),
            // },
            // "kind.en": { $in: product.kind.map((gt) => gt.en) },
        });

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
