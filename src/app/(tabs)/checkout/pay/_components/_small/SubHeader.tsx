"use client";
import useBagStore from "@/src/queries/order/bag/store";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const SubHeader = () => {
    const items = useBagStore((s) => s.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <div className="h-12 sticky top-0 z-10 flex items-center justify-between px-5 bg-[#fff5] backdrop-blur-xl border-y border-[#eeea]">
            <p className="text-neutral-600">بررسی نهایی و ثبت سفارش</p>
            <p className="flex items-center gap-1">
                <span className="text-xl text-gray-800">
                    {convertEngToPer(totalItems)}
                </span>
                <span className="text-sm text-neutral-500 font-shabt">
                    محصول
                </span>
            </p>
        </div>
    );
};

export default SubHeader;
