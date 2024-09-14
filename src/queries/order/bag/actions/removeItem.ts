import { Item } from "../../Entities";

const removeItem =
    (item: Item, storage: Storage | null) => (state: { items: Item[] }) => {
        const updatedItems = state.items.filter((i) => i !== item);
        try {
            storage?.setItem("bagItems", JSON.stringify(updatedItems));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            items: updatedItems,
        };
    };

export default removeItem;
