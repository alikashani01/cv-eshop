import { Item } from "../../Entities";

const addItem =
    (item: Item, storage: Storage | null) => (state: { items: Item[] }) => {
        const itemExists = state.items.find((i) => {
            const isIdMatch = i.product === item.product;
            const isNameMatch = i.name === item.name;
            const isColorMatch = i.color && i.color.fa === item.color.fa;
            const isStorageMatch =
                (!i.storage && !item.storage) ||
                (i.storage &&
                    item.storage &&
                    i.storage.capacity === item.storage.capacity);

            return isIdMatch && isNameMatch && isColorMatch && isStorageMatch;
        });

        if (!itemExists) {
            const newItems = [item, ...state.items];

            try {
                storage?.setItem("bagItems", JSON.stringify(newItems));
            } catch (error) {
                console.error("Error saving data to localStorage:", error);
            }

            return {
                ...state,
                items: newItems,
            };
        } else {
            const newItems = state.items.filter((i) => i !== itemExists);

            try {
                storage?.setItem("bagItems", JSON.stringify(newItems));
            } catch (error) {
                console.error("Error saving data to localStorage:", error);
            }

            return {
                ...state,
                items: newItems,
            };
        }
    };

export default addItem;
