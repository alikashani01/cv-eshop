"use client";
import Empty from "@/src/app/_components/_modules/Empty";
import useFetchUserQuestions from "@/src/queries/question/useFetchUserList";
import { useState } from "react";
import Item from "./item/Item";
import Loading from "./Loading";
import QuestionDetails from "./question-details/Details";

const List = () => {
    const { data: questions, isPending } = useFetchUserQuestions();
    const [questionId, setQuestionId] = useState("");
    return (
        <>
            <Empty
                message="پرسشی ثبت نکرده‌اید!"
                length={questions?.length}
                padding="20px"
            />
            <ul className="p-4 py-16 lg:p-6 grid md:grid-cols-2 gap-4 lg:gap-6">
                {isPending ? (
                    <Loading />
                ) : (
                    questions?.map((question) => (
                        <Item
                            key={question._id}
                            question={question}
                            setQuestionId={(value: string) =>
                                setQuestionId(value)
                            }
                        />
                    ))
                )}
            </ul>
            <QuestionDetails
                questionID={questionId}
                onClose={() => setQuestionId("")}
            />
        </>
    );
};

export default List;
