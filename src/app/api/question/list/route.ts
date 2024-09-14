import connectDB from "@/db";
import Question from "@/src/models/Question";
import { SortOrder } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();

        const params = new URL(request.url).searchParams;
        const productId = params.get("productId")!;
        const sort = params.get("sort")!;

        let sortOrder: { [key: string]: SortOrder } = {};

        if (sort === "جدیدترین") {
            sortOrder = { createdAt: -1 };
        } else if (sort === "قدیمی‌ترین") {
            sortOrder = { createdAt: 1 };
        } else if (sort === "بالاترین امتیاز") {
            sortOrder = { rating: -1 };
        } else if (sort === "کمترین امتیاز") {
            sortOrder = { rating: 1 };
        } else {
            sortOrder = { createdAt: -1 };
        }

        const questions = await Question.find({ product: productId })
            .sort(sortOrder)
            .populate({
                path: "user",
                model: "User",
                select: {
                    fullName: 1,
                    userType: 1,
                },
            })
            .populate({
                path: "product",
                model: "Product",
                select: {
                    "name.en": 1,
                    "name.fa": 1,
                },
            });

        return NextResponse.json(questions, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
