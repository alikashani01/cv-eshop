import { create } from "zustand";
import { Item, ShippingInfo } from "../Entities";
import { BagStore } from "./Entities";
import {
    addItem,
    decrement,
    increment,
    removeItem,
    removeItems,
} from "./actions/index";
import addShippingInfo from "./actions/shippingInfo";
import verifyMobile from "./actions/verifyMobile";

const useBagStore = create<BagStore>((set) => {
    let storage: Storage | null = null;

    if (typeof window !== "undefined") storage = window.localStorage;

    if (!storage) {
        console.error("localStorage is not supported in this browser.");
    }

    try {
        const storedItems = storage?.getItem("bagItems");
        const initialItems: Item[] = storedItems ? JSON.parse(storedItems) : [];

        const storedShippingInfo = storage?.getItem("shippingInfo");
        const initialShippingInfo: ShippingInfo = storedShippingInfo
            ? JSON.parse(storedShippingInfo)
            : {
                  fullName: "",
                  mobile: "",
                  isMobileVerified: false,
                  title: "",
                  state: "",
                  city: "",
                  street: "",
                  zipCode: "",
                  description: "",
              };

        return {
            setVerifyMobile: (mobile: string) =>
                set(verifyMobile(mobile, storage)),
            shippingInfo: initialShippingInfo,
            setShippingInfo: (data) => set(addShippingInfo(data, storage)),
            items: initialItems,
            setAdd: (item) => set(addItem(item, storage)),
            setRemoveAll: () => set(removeItems),
            setRemoveItem: (item) => set(removeItem(item, storage)),
            incrementBag: (item) => set(increment(item, storage)),
            decrementBag: (item) => set(decrement(item, storage)),
        };
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
    }

    return {
        setVerifyMobile: () => {},
        shippingInfo: {} as ShippingInfo,
        setShippingInfo: () => {},
        items: [],
        setAdd: () => {},
        setRemoveAll: () => {},
        setRemoveItem: () => {},
        incrementBag: () => {},
        decrementBag: () => {},
    };
});
export default useBagStore;
