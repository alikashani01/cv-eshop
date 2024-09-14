import { getSession } from "@/authentication";
import connectDB from "@/db";
import Question from "@/src/models/Question";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const questionId = new URL(request.url).searchParams.get("questionId")!;

        const question = await Question.findById(questionId)
            .populate({
                path: "user",
                model: "User",
                select: { fullName: 1, userType: 1 },
            })
            .populate({
                path: "product",
                model: "Product",
                select: { "name.en": 1, "name.fa": 1 },
            });
        if (!question)
            return NextResponse.json("پرسش پیدا نشد!", { status: 404 });

        return NextResponse.json(question, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
