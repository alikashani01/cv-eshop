import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../../_Context";
import Price from "./Price";
import Quantity from "./Quantity";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const SmallScreen = () => {
    const {
        onAddItem,
        itemExists,
        data: { quantity },
    } = useContext(Context);

    return (
        <div className="md:hidden w-full h-full *:px-4">
            <div className="h-9 pt-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-neutral-600 font-shabt">تعداد</p>
                    <p className="text-xl">{convertEngToPer(quantity)}</p>
                </div>
                <Price />
            </div>
            <div className="h-12 flex items-center justify-between ">
                <Quantity />
                {itemExists ? (
                    <Link
                        className="border border-blue-600 text-blue-500 h-10 px-5 text-sm rounded-full"
                        href="/checkout/shipping-info"
                    >
                        تسویه حساب
                    </Link>
                ) : (
                    <button
                        className="bg-blue-600 text-white h-10 px-5 text-sm rounded-full"
                        onClick={onAddItem}
                    >
                        افزودن به سبد خرید
                    </button>
                )}
            </div>
        </div>
    );
};

export default SmallScreen;
