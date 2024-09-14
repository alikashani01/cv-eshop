import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();

        const products = await Product.find({
            "pricing.discount.value": { $gt: 0 },
        })
            .sort({ createdAt: -1 })
            .limit(8);

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
