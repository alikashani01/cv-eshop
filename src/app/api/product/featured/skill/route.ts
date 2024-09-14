import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();

        const category =
            new URL(request.url).searchParams.get("category") || "education";

        const products = await Product.find({
            "featured.edu.isEdu": true,
        }).sort({ createdAt: -1 });

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
