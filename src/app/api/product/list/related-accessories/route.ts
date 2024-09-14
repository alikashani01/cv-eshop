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

        let relatedList: string[] = [];
        let accessoryRelatedList: string[] = [];

        if (product.category?.en === "laptop") {
            relatedList = ["headphone", "flash memory", "game controller"];
        } else if (product.category?.en === "mobile") {
            relatedList = ["headphone", "flash memory"];
        }

        const products = await Product.find({
            "category.en": "accessory",
            "subCategory.en": { $in: relatedList },
        });

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
