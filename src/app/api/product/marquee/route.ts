import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();

        const products = await Product.find({})
            .sort({ createdAt: -1 })
            .limit(10);

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
