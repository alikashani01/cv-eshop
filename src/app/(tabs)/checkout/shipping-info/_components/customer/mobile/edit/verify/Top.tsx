import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../_Context";

const Top = () => {
    const { data } = useContext(Context);
    return (
        <div className="flex items-center justify-between mb-1">
            <p className="text-neutral-300 text-sm font-shabt">
                کد تایید ارسال شد
            </p>
            <p className="flex items-center tracking-[3px] text-neutral-300 font-shabb">
                {convertEngToPer(data)}
            </p>
        </div>
    );
};

export default Top;
