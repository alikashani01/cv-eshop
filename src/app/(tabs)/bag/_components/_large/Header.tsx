"use client";
import useBagStore from "@/src/queries/order/bag/store";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Link from "next/link";

const Header = () => {
    const items = useBagStore((s) => s.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="sticky h-16 border-b border-[#fff] top-0 z-10 flex items-center justify-between bg-[#fafafa55] backdrop-blur-xl">
            <div className="flex items-center gap-2">
                <p className="font-shabb text-xl text-[#555555]">سبد خرید</p>
                <p className="flex items-center gap-2 font-shabb text-lg text-[#555555]">
                    <span className="text-sm text-[#666666] font-shabt">
                        تعداد
                    </span>
                    <span className="text-xl text-[#444]">
                        {convertEngToPer(totalItems)}
                    </span>
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <p className="flex items-center gap-1">
                        <span className="tracking-[1px] text-lg text-[#444]">
                            {totalPrice.toLocaleString("fa")}
                        </span>
                        <span className="text-[.7rem] text-[#666] font-shabt">
                            تومان
                        </span>
                    </p>
                </div>
                <Link
                    className="text-white text-[.95rem] bg-blue-600 p-2 px-4 rounded-full"
                    href="/checkout/shipping-info"
                >
                    تسویه حساب
                </Link>
            </div>
        </div>
    );
};

export default Header;
