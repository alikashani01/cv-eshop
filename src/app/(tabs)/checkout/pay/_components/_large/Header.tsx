"use client";
import useBagStore from "@/src/queries/order/bag/store";
import usePayOrder from "@/src/queries/order/usePay";
import { handleTotalItems } from "@/src/utils/bag";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
        <div className="h-20 sticky top-12 left-0 z-10 flex items-center justify-between bg-[#fff5] backdrop-blur-xl border-b border-neutral-100 px-[5%] lg:px-[8%]">
            <div>
                <Link
                    className="justify-start gap-[2px] -mr-1"
                    href="shipping-info"
                >
                    <Image
                        width={20}
                        height={20}
                        src="/icons/arrow/right-b.png"
                        alt=""
                    />
                    <p className="text-[.9rem]">حمل و نقل</p>
                </Link>

                <p className="text-lg text-neutral-600 mt-[2px]">
                    بررسی نهایی و ثبت سفارش
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <div className="flex items-center gap-1">
                        <p className="tracking-[1.5px] text-xl text-neutral-700">
                            {handleTotalItems(items)}
                        </p>
                        <p className="text-[.8rem] font-shabt text-neutral-500">
                            محصول
                        </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="tracking-[1.5px] text-[1.15rem] text-neutral-800">
                            {totalPrice.toLocaleString("fa")}
                        </p>
                        <p className="text-[.65rem] font-shabt text-neutral-500">
                            تومان
                        </p>
                    </div>
                </div>
                <button
                    className="disabled:bg-[#e1e1e1] disabled:text-gray-500 p-2 px-6 bg-green-600 rounded-full text-white gap-2"
                    onClick={handlePay}
                    disabled={pay.isPending}
                >
                    {pay.isPending && (
                        <CircularProgress size={15} sx={{ color: "#00d166" }} />
                    )}
                    پرداخت
                </button>
            </div>
        </div>
    );
};

export default Header;
