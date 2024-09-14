import { useContext } from "react";
import { Context } from "../Item";

const TotalPrice = () => {
    const { price, quantity } = useContext(Context);
    const totalPrice = price * quantity;
    return (
        <p className="flex items-center gap-1 mb-1">
            <span className="text-xl text-neutral-600 tracking-[1px]">
                {totalPrice.toLocaleString("fa")}
            </span>
            <span className="text-[.65rem] text-[#777777] font-shabt">
                تومان
            </span>
        </p>
    );
};

export default TotalPrice;
