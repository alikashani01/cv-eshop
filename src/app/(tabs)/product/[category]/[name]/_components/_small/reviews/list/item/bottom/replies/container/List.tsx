import Empty from "@/src/app/_components/_modules/Empty";
import useFetchReviewReplies from "@/src/queries/review/reply/useFetchList";
import { useContext } from "react";
import { Context } from "../../../Item";
import Item from "./item/Item";
import Loading from "./Loading";

const List = () => {
    const { _id } = useContext(Context);
    const { data: replies, isLoading } = useFetchReviewReplies(_id);
    return (
        <ul className="w-[100%] px-6 mx-auto">
            <Empty
                message="هنوز پاسخی ثبت نشده"
                length={replies?.length}
                padding="40px 0"
            />
            {isLoading ? (
                <Loading />
            ) : (
                replies?.map((reply) => <Item key={reply._id} reply={reply} />)
            )}
        </ul>
    );
};

export default List;
