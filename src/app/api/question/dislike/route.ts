import { getSession } from "@/authentication";
import connectDB from "@/db";
import Question from "@/src/models/Question";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
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

        const alreadyDisLiked = question.dislikes?.find(
            (u) => u.toString() === user._id.toString()
        );
        question.dislikes = alreadyDisLiked
            ? question.dislikes?.filter(
                  (u) => u.toString() !== user._id.toString()
              )
            : [user._id, ...(question.dislikes || [])];

        const alreadyLiked = question.likes?.find(
            (u) => u.toString() === user._id.toString()
        );

        if (alreadyLiked) {
            question.likes = question.likes?.filter(
                (u) => u.toString() !== user._id.toString()
            );
        }

        await question.save();

        return NextResponse.json("انجام شد", { status: 200 });
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 400 });
    }
}
