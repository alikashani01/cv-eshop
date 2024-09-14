import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    try {
        connectDB();
        const keyword = new URL(request.url).searchParams.get("keyword") || "";
        const products = await Product.find({
            $or: [
                { "name.en": { $regex: new RegExp(keyword, "i") } },
                // { "name.fa": { $regex: new RegExp(keyword, "i") } },
                // { "title.en": { $regex: new RegExp(keyword, "i") } },
                // { "title.fa": { $regex: new RegExp(keyword, "i") } },
            ],
        }).sort({ createdAt: -1 });
        return NextResponse.json(keyword ? products : [], { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
