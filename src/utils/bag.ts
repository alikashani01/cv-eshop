import { Item } from "@/src/queries/order/Entities";
import { convertEngToPer } from "./convertNumberTypes";

export const handleTotalItems = (items: Item[]) => {
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    return convertEngToPer(totalItems);
};

export const handleItemsPrice = (items: Item[]) => {
    const totalItemsPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return totalItemsPrice;
};

export const handleTotalDiscount = (items: Item[]) => {
    return (
        items.reduce((acc, item) => acc + item.discount * item.quantity, 0) /
        100
    );
};
