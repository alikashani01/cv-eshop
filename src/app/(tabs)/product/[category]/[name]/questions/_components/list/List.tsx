"use client";
import useFetchQuestions from "@/src/queries/question/useFetchList";
import { useContext, useState } from "react";
import { ProductContext } from "../../../_Context";
import FullQuestion from "./full-question/FullQuestion";
import Item from "./item/Item";
import Loading from "./Loading";

const List = () => {
    const [questionID, setQuestionID] = useState("");
    const handleQuestionDetails = (id: string) => setQuestionID(id);
    const { _id } = useContext(ProductContext);
    const { data: questions, isPending } = useFetchQuestions(_id!);
    return (
        <>
            <ul className="w-full grid lg:grid-cols-2 gap-4 md:gap-6 py-4 md:py-6 px-4 lg:px-[8%]">
                {isPending ? (
                    <Loading />
                ) : (
                    questions?.map((question) => (
                        <Item
                            key={question._id}
                            question={question}
                            onOpenDetails={handleQuestionDetails}
                        />
                    ))
                )}
            </ul>
            <FullQuestion
                questionID={questionID}
                onClose={() => setQuestionID("")}
            />
        </>
    );
};

export default List;
