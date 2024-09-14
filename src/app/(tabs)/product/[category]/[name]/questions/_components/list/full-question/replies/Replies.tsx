import useFetchQuestionReplies from "@/src/queries/question/reply/useFetchList";
import { useContext } from "react";
import { Context } from "../FullQuestion";
import Item from "./item/Item";
import Loading from "./Loading";

const Replies = () => {
    const { _id } = useContext(Context);
    const { data: replies, isLoading } = useFetchQuestionReplies(_id);
    return (
        <ul className="pb-12 md:p-0">
            <p className="px-6 mt-10 text-[.9rem] text-neutral-200 font-shabt">
                {replies?.length === 0 ? "بدون پاسخ" : "پاسخ‌ها"}
            </p>
            {isLoading ? (
                <Loading />
            ) : (
                replies?.map((reply) => <Item key={reply._id} reply={reply} />)
            )}
        </ul>
    );
};

export default Replies;
