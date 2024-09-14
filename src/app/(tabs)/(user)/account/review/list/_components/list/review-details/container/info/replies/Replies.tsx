import useFetchReviewReplies from "@/src/queries/review/reply/useFetchList";
import { useContext } from "react";
import { Context } from "../../Container";
import Header from "./Header";
import List from "./List";
import Loading from "./Loading";

const Replies = () => {
    const { _id } = useContext(Context);
    const { data: replies, isPending } = useFetchReviewReplies(_id);
    return (
        <div className="bg-second-theme p-3 px-4 rounded-2xl">
            {isPending ? (
                <Loading />
            ) : (
                <>
                    <Header replies={replies?.length || 0} />
                    <List replies={replies} />
                </>
            )}
        </div>
    );
};

export default Replies;
