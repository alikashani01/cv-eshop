"use client";
import useBagStore from "@/src/queries/order/bag/store";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const Header = () => {
    const items = useBagStore((s) => s.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <div className="flex items-center gap-2 p-3 px-6">
            <p className="font-shabb text-lg text-neutral-600">سبد خرید</p>
            {totalItems > 0 && (
                <div className="flex items-center gap-1">
                    <p className="flex items-center gap-1 text-xl text-neutral-800">
                        {convertEngToPer(totalItems)}
                    </p>
                    <p className="font-shabt text-sm text-neutral-500">محصول</p>
                </div>
            )}
        </div>
    );
};

export default Header;
