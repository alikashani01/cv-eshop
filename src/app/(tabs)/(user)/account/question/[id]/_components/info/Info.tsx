"use client";

import useFetchQuestionDetails from "@/src/queries/question/useFetchDetails";
import { useParams } from "next/navigation";
import Content from "./Content";
import Loading from "./Loading";
import Replies from "./replies/Replies";

const Info = () => {
    const { id } = useParams<{ id: string }>();
    const { isPending } = useFetchQuestionDetails(id);
    return (
        <div className="w-full flex flex-col gap-4 lg:gap-0 p-4 lg:p-0 pb-16 *:w-full">
            {isPending ? (
                <Loading />
            ) : (
                <>
                    <Content />
                    <Replies />
                </>
            )}
        </div>
    );
};

export default Info;
