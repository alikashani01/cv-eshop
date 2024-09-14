"use client";
import { useContext } from "react";
import { Context } from "../../_Context";

const Prices = () => {
    const { items } = useContext(Context);

    const totalItemsPrice = items?.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shippingPrice = 30000;

    const tax = 9 / 100;
    const taxPrice = totalItemsPrice * tax;

    const totalDiscount =
        items?.reduce((acc, item) => acc + item.discount * item.quantity, 0) /
        100;

    const discountPrice = totalItemsPrice * totalDiscount;

    const totalPrice =
        totalItemsPrice + taxPrice + shippingPrice - discountPrice;

    return (
        <div className="w-full bg-second-theme lg:bg-white rounded-xl">
            <p className="p-4 pb-0 text-neutral-500">هزینه‌ها</p>

            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                <p className="text-sm text-neutral-500">محصولات</p>
                <div className="flex items-center gap-1 mt-[-2px]">
                    <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                        {totalItemsPrice?.toLocaleString("fa")}
                    </p>
                    <p className="text-[.65rem] font-shabt text-[#aaa]">
                        تومان
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                <p className="text-sm text-neutral-500">مالیات</p>
                <div className="flex items-center gap-1 mt-[-2px]">
                    <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                        {taxPrice.toLocaleString("fa")}
                    </p>
                    <p className="text-[.65rem] font-shabt text-[#aaa]">
                        تومان
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                <p className="text-sm text-neutral-500">حمل و نقل</p>
                <div className="flex items-center gap-1 mt-[-2px]">
                    <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                        {shippingPrice.toLocaleString("fa")}
                    </p>
                    <p className="text-[.65rem] font-shabt text-[#aaa]">
                        تومان
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                <p className="text-sm text-neutral-500">تخفیف</p>
                <div className="flex items-center gap-1 mt-[-2px]">
                    <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                        {discountPrice.toLocaleString("fa")}
                    </p>
                    <p className="text-[.65rem] font-shabt text-[#aaa]">
                        تومان
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm text-neutral-500">مجموع</p>
                <div className="flex items-center gap-1 mt-[-2px]">
                    <p className="tracking-[1.5px] text-[1.05rem] text-neutral-800">
                        {totalPrice.toLocaleString("fa")}
                    </p>
                    <p className="text-[.65rem] font-shabt text-[#aaa]">
                        تومان
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Prices;
