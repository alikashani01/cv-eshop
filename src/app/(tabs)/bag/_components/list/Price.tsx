import { useContext } from "react";
import { Context } from "./Item";

const Price = () => {
    const { price } = useContext(Context);
    return (
        <p className="flex items-center gap-1 mb-1">
            <span className="text-sm text-neutral-500 font-shabt">
                {price.toLocaleString("fa")}
            </span>
            <span className="text-[.6rem] text-neutral-400 font-shabt">
                تومان
            </span>
        </p>
    );
};

export default Price;
