import { ShippingInfo } from "../../Entities";

const verifyMobile =
    (mobile: string, storage: Storage | null) =>
    (state: { shippingInfo: ShippingInfo }) => {
        const newShippingInfo = {
            ...state.shippingInfo,
            mobile,
            isMobileVerified: true,
        };
        try {
            storage?.setItem("shippingInfo", JSON.stringify(newShippingInfo));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            ...state,
            shippingInfo: {
                ...newShippingInfo,
            },
        };
    };

export default verifyMobile;
