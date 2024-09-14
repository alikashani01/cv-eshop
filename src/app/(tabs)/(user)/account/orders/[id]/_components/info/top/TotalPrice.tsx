import { useContext } from "react";
import { Context } from "../../../_Context";

const TotalPrice = () => {
    const { prices } = useContext(Context);
    return (
        <div className="h-20 flex items-center flex-col justify-between overflow-hidden bg-second-theme lg:bg-white rounded-xl">
            <p className="w-full h-9 flex items-center justify-center pt-[1.5px] bg-[#eeeeee] text-[.8rem] text-neutral-500">
                کل هزینه
            </p>
            <div className="h-11 flex items-center justify-center gap-1">
                <p className="text-[.95rem] lg:text-lg tracking-[2px] text-neutral-800">
                    {prices?.total.toLocaleString("fa")}
                </p>
                <p className="text-[.7rem] text-neutral-400 font-shabt">
                    تومان
                </p>
            </div>
        </div>
    );
};

export default TotalPrice;
