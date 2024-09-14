import { Item, ShippingInfo } from "../../Entities";

const updateMobile =
    (mobile: string, storage: Storage | null) =>
    (state: { shippingInfo: ShippingInfo }) => {
        try {
            const updatedShippingInfo = { ...state.shippingInfo, mobile };
            storage?.setItem(
                "shippingInfo",
                JSON.stringify(updatedShippingInfo)
            );
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            ...state,
            shippingInfo: {
                ...state.shippingInfo,
                mobile,
            },
        };
    };

export default updateMobile;
