import useFetchQuestionReplies from "@/src/queries/question/reply/useFetchList";
import { useContext } from "react";
import { Context } from "../../FullQuestion";
import Item from "./item/Item";
import Loading from "./Loading";

const List = () => {
    const { _id } = useContext(Context);
    const { data: replies, isLoading } = useFetchQuestionReplies(_id);
    return (
        <ul>
            {isLoading ? (
                <Loading />
            ) : (
                replies?.map((reply) => <Item key={reply._id} reply={reply} />)
            )}
        </ul>
    );
};

export default List;
