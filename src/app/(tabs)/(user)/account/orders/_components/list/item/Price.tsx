import { useContext } from "react";
import { Context } from "./Item";

const Price = () => {
    const {
        prices: { total },
    } = useContext(Context);
    return (
        <div className="flex flex-col items-center justify-center border-r border-neutral-100 *:text-center px-[2px]">
            <p className="h-5 text-[.8rem] font-shabt text-neutral-500">
                هزینه
            </p>
            <div className="flex items-center justify-center gap-1">
                <p className="text-neutral-700 tracking-[.5px] text-sm">
                    {total.toLocaleString("fa")}
                </p>
                <p className="text-[.6rem] font-shabt text-neutral-500">
                    تومان
                </p>
            </div>
        </div>
    );
};

export default Price;
