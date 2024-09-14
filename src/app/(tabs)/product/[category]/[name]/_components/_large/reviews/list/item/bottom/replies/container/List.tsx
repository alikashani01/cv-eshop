import Empty from "@/src/app/_components/_modules/Empty";
import useFetchReviewReplies from "@/src/queries/review/reply/useFetchList";
import { useContext } from "react";
import { Context } from "../../../Item";
import Loading from "./Loading";
import Item from "./item/Item";

const List = () => {
    const { _id } = useContext(Context);
    console.log("FUCK");

    const { data: replies, isLoading } = useFetchReviewReplies(_id);
    return (
        <ul className="w-[100%] py-4 px-6 mx-auto">
            <Empty
                message="هنوز پاسخی ثبت نشده"
                length={replies?.length}
                padding="40px"
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
