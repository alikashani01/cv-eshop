import { getSession } from "@/authentication";
import connectDB from "@/db";
import Order from "@/src/models/Order";
import Reply from "@/src/models/Reply";
import Question from "@/src/models/Question";
import User from "@/src/models/User";
import { SortOrder } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        connectDB();

        const params = new URL(request.url).searchParams;

        const questionId = params.get("questionId")!;
        const question = await Question.findById(questionId);
        if (!question)
            return NextResponse.json("پرسش پیدا نشد!", { status: 404 });

        const sort = params.get("sort")!;

        let sortOrder: { [key: string]: SortOrder } = {};

        if (sort === "جدیدترین") {
            sortOrder = { createdAt: -1 };
        } else if (sort === "قدیمی‌ترین") {
            sortOrder = { createdAt: 1 };
        }

        const replies = await Reply.find({ question: questionId })
            .sort(sortOrder)
            .populate({
                path: "user",
                model: "User",
                select: { fullName: 1, userType: 1 },
            })
            .populate({
                path: "question",
                model: "Question",
                select: { content: 1 },
            });

        return NextResponse.json(replies, { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}

export async function POST(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const questionId = new URL(request.url).searchParams.get("questionId")!;

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const question = await Question.findById(questionId);
        if (!question)
            return NextResponse.json("پرسش پیدا نشد!", { status: 404 });

        const { content } = await request.json();

        const orders = await Order.find({ user: user._id });

        const allItems = orders.flatMap((order) => order.items);

        const userType = allItems.find(
            (i) => i.product?.toString() === question.product?.toString()
        )
            ? "خریدار"
            : "کاربر";

        const newReply = await Reply.create({
            user: user._id,
            userType,
            question: question._id,
            content,
        });

        question.replies = [newReply._id, ...(question.replies || [])];
        user.replies = [newReply._id, ...(user.replies || [])];

        await question.save();
        await user.save();

        return NextResponse.json("پاسخ‌تان ثبت شد", { status: 201 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}

export async function DELETE(request: NextRequest) {
    const session = await getSession();
    if (!session)
        return NextResponse.json("لطفا وارد حساب کاربری‌تان شوید", {
            status: 401,
        });
    try {
        connectDB();

        const { searchParams } = new URL(request.url);

        const questionId = searchParams.get("questionId")!;
        const replyId = searchParams.get("replyId");

        const user = await User.findById(session.userId);
        if (!user) return NextResponse.json("کاربر پیدا نشد!", { status: 404 });

        const question = await Question.findById(questionId);
        if (!question)
            return NextResponse.json("پرسش پیدا نشد!", { status: 404 });

        const reply = await Reply.findById(replyId);
        if (!reply) return NextResponse.json("پاسخ پیدا نشد!", { status: 404 });

        question.replies = question.replies?.filter(
            (r) => r.toString() !== replyId
        );
        user.replies = user.replies?.filter((r) => r.toString() !== replyId);

        await reply.deleteOne();
        await question.save();

        return NextResponse.json("پاسخ‌تان حذف شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
