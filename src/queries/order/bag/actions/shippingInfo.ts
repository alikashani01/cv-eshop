import { ShippingInfo } from "../../Entities";

const addShippingInfo =
    (data: ShippingInfo, storage: Storage | null) =>
    (state: { shippingInfo: ShippingInfo }) => {
        try {
            storage?.setItem("shippingInfo", JSON.stringify(data));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            ...state,
            shippingInfo: data,
        };
    };

export default addShippingInfo;
