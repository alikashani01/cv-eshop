import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();

        const params = new URL(request.url).searchParams;
        const slug = params.get("slug") || "";
        const convertedSlug = slug?.split("-").join(" ");
        const decodedSlug = decodeURIComponent(convertedSlug);

        const product = await Product.findOne({
            $or: [{ "name.fa": decodedSlug }, { "title.fa": decodedSlug }],
        });

        if (!product)
            return NextResponse.json("محصول پیدا نشد!", { status: 404 });

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
