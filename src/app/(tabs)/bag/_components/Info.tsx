"use client";
import useBagStore from "@/src/queries/order/bag/store";
import Link from "next/link";

const Info = () => {
    const items = useBagStore((s) => s.items);
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="sticky h-12 border-y border-[#f5f5f7] top-0 z-10 flex items-center justify-between bg-[#fff5] backdrop-blur-xl px-4">
            {items.length > 0 ? (
                <>
                    <p className="flex items-center gap-1">
                        <span className="tracking-[1px] text-lg text-neutral-600">
                            {totalPrice.toLocaleString("fa")}
                        </span>
                        <span className="text-[.7rem] text-[#666] font-shabt">
                            تومان
                        </span>
                    </p>
                    <Link
                        className="bg-blue text-white text-sm p-2 px-4 rounded-full"
                        href="/checkout/shipping-info"
                    >
                        تسویه حساب
                    </Link>
                </>
            ) : (
                <p className="w-full flex items-center justify-center text-[.95rem] text-neutral-600">
                    سبد خرید خالی است!
                </p>
            )}
        </div>
    );
};

export default Info;
