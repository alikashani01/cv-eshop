import { useContext } from "react";
import { Context } from "../../../_Context";

const Price = () => {
    const { data, discountedPrice } = useContext(Context);
    const totalPrice = discountedPrice() * data.quantity;
    return (
        <div className="flex items-center gap-1">
            <p className="text-2xl tracking-[1px] text-neutral-600">
                {totalPrice.toLocaleString("fa")}
            </p>
            <p className="text-[.7rem] text-[#999] font-shabmt">تومان</p>
        </div>
    );
};

export default Price;
