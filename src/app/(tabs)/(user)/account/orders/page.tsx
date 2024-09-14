import { Metadata } from "next";
import Large from "./_components/_large/Large";
import Small from "./_components/_small/Small";

const OrdersPage = async () => {
    return (
        <>
            <Small />
            <Large />
        </>
    );
};

export const metadata: Metadata = {
    title: "Tech Shop | سفارش‌ها",
};

export default OrdersPage;
