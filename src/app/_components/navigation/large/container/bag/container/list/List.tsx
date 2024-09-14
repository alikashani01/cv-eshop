import useBagStore from "@/src/queries/order/bag/store";
import Item from "./Item";

const List = () => {
    const items = useBagStore((s) => s.items);
    return (
        <ul>
            {items?.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ul>
    );
};

export default List;
