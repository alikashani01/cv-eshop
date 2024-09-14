import { Reply } from "@/src/queries/question/Entities";
import Item from "./item/Item";

const List = ({ replies }: { replies?: Reply[] }) => {
    return (
        replies?.length! > 0 && (
            <ul className="pt-2">
                {replies?.map((reply) => (
                    <Item key={reply._id} reply={reply} />
                ))}
            </ul>
        )
    );
};

export default List;
