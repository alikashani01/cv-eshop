import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Remove = () => {
    const { onAddItem } = useContext(Context);
    return (
        <>
            <button
                className="bg-rose-600 text-white h-full px-5 text-sm rounded-full"
                onClick={onAddItem}
            >
                حذف از سبد خرید
            </button>
            <Link className="min-w-[135px]" href="/checkout/shipping-info">
                تسویه حساب
            </Link>
        </>
    );
};

export default Remove;
