import { getSession } from "@/authentication";
import connectDB from "@/db";
import Product from "@/src/models/Product";
import Reply from "@/src/models/Reply";
import Question from "@/src/models/Question";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest): Promise<void | Response> {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const questionId = new URL(request.url).searchParams.get("questionId")!;

        const question = await Question.findById(questionId);
        if (!question)
            return NextResponse.json("پرسش پیدا نشد!", { status: 404 });

        const product = await Product.findById(question.product);
        if (!product)
            return NextResponse.json("محصول پیدا نشد!", { status: 404 });

        await Reply.find({ question: question._id }).deleteMany();

        await question.deleteOne();

        product.questions = product.questions?.filter(
            (r) => r.toString() !== questionId
        );

        user.questions = user.questions?.filter(
            (r) => r.toString() !== questionId
        );

        await product.save();
        return NextResponse.json("پرسش حذف شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
