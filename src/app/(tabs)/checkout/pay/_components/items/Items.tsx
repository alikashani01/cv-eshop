"use client";
import useBagStore from "@/src/queries/order/bag/store";
import Item from "./Item";

const Items = () => {
    const items = useBagStore((s) => s.items);
    return (
        <ul className="">
            {items?.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ul>
    );
};

export default Items;
