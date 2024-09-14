"use client";
import useBagStore from "@/src/queries/order/bag/store";
import Item from "./Item";

const List = () => {
    const items = useBagStore((s) => s.items);
    return (
        <ul className="lg:w-1/2 mx-auto lg:mt-6">
            {items?.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ul>
    );
};

export default List;
