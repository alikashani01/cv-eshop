import { Item } from "../../Entities";

const increment =
    (item: Item, storage: Storage | null) => (state: { items: Item[] }) => {
        const updatedItems = state.items.map((i) => {
            if (
                i.product === item.product &&
                i.name === item.name &&
                i.color.fa === item.color.fa &&
                i.storage.capacity &&
                i.storage.capacity === item.storage.capacity
            ) {
                if (item.quantity === 1) {
                    return {
                        ...i,
                        quantity: i.quantity,
                    };
                } else {
                    return {
                        ...i,
                        quantity: (i.quantity || 0) - 1,
                    };
                }
            } else {
                return i;
            }
        });

        try {
            storage?.setItem("bagItems", JSON.stringify(updatedItems));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            items: updatedItems,
        };
    };

export default increment;
