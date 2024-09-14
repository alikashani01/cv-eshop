import { Item, ShippingInfo } from "../Entities";

export type BagStore = {
    setVerifyMobile: (mobile: string) => void;
    shippingInfo: ShippingInfo;
    setShippingInfo: (data: ShippingInfo) => void;
    items: Item[];
    setAdd: (item: Item) => void;
    setRemoveAll: () => void;
    setRemoveItem: (item: Item) => void;
    incrementBag: (item: Item) => void;
    decrementBag: (item: Item) => void;
};
