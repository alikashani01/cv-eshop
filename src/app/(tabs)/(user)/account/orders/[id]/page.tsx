import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";
import ContextProvider from "./_Context";

const OrderDetailsPage = () => {
    return (
        <ContextProvider>
            <Small />
            <Large />
        </ContextProvider>
    );
};

export const metadata: Metadata = {
    title: "Tech Shop | سفارش‌ ۳۳۴۱",
};

export default OrderDetailsPage;
