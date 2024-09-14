"use client";
import useBagStore from "@/src/queries/order/bag/store";
import usePayOrder from "@/src/queries/order/usePay";
import { CircularProgress } from "@mui/material";

const Footer = () => {
    const shippingInfo = useBagStore((s) => s.shippingInfo);
    const items = useBagStore((s) => s.items);

    const totalItemsPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shippingPrice = 30000;

    const tax = 9 / 100;
    const taxPrice = totalItemsPrice * tax;

    const totalDiscount =
        items.reduce((acc, item) => acc + item.discount * item.quantity, 0) /
        100;

    const discountPrice = totalItemsPrice * totalDiscount;

    const totalPrice =
        totalItemsPrice + taxPrice + shippingPrice - discountPrice;

    const pay = usePayOrder();
    const handlePay = () => {
        pay.mutate({
            items,
            shippingInfo,
            prices: {
                tax: taxPrice,
                shipping: shippingPrice,
                items: totalItemsPrice,
                discount: discountPrice,
                profit: discountPrice,
                total: totalPrice,
            },
        });
    };

    return (
        <div className="w-full h-14 flex items-center justify-between gap-4 p-1 px-2 fixed bottom-0 left-0 z-20 bg-[#f1f1f122] backdrop-blur-xl">
            <div className="flex items-center gap-1">
                <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                    {totalPrice.toLocaleString("fa")}
                </p>
                <p className="text-[.65rem] font-shabmt text-[#aaa]">تومان</p>
            </div>

            <button
                className="disabled:bg-[#e1e1e1] disabled:text-gray-500 w-full h-full bg-green-600 rounded-2xl text-white gap-2"
                onClick={handlePay}
                disabled={pay.isPending}
            >
                {pay.isPending && (
                    <CircularProgress size={15} sx={{ color: "#00d166" }} />
                )}
                پرداخت
            </button>
        </div>
    );
};

export default Footer;
