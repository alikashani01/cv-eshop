"use client";

import useFetchReviewDetails from "@/src/queries/review/useFetchDetails";
import { useParams } from "next/navigation";
import Comment from "./Comment";
import Features from "./features/Features";
import Loading from "./Loading";
import Replies from "./replies/Replies";

const Info = () => {
    const { id } = useParams<{ id: string }>();
    const { isPending } = useFetchReviewDetails(id);
    return (
        <div className="w-full flex flex-col gap-4 lg:gap-0 p-4 lg:p-0 pb-16 *:w-full">
            {isPending ? (
                <Loading />
            ) : (
                <>
                    <Comment />
                    <Features />
                    <Replies />
                </>
            )}
        </div>
    );
};

export default Info;
