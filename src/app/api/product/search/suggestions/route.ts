import connectDB from "@/db";
import Product from "@/src/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<void | Response> {
    try {
        connectDB();

        const productsCount = await Product.countDocuments();

        const products = await Product.find({}).sort({ createdAt: -1 });

        let randomProducts: any[] = [];

        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * productsCount);
            randomProducts = [products[randomIndex], ...randomProducts];
        }

        return NextResponse.json(randomProducts, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
