import useFetchQuestionReplies from "@/src/queries/question/reply/useFetchList";
import { useContext } from "react";
import { Context } from "../../../_Context";
import Header from "./Header";
import List from "./List";
import Loading from "./Loading";

const Replies = () => {
    const { _id } = useContext(Context);
    const { data: replies, isPending } = useFetchQuestionReplies(_id);
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
