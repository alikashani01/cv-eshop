import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../../Container";

const Code = () => {
    const { code } = useContext(Context);
    return (
        <div className="h-20 flex items-center flex-col justify-between overflow-hidden bg-second-theme rounded-xl">
            <p className="w-full h-9 flex items-center justify-center pt-[1.5px] bg-[#eeeeee] text-[.8rem] text-neutral-500">
                شناسه
            </p>
            <div className="h-11 flex items-center justify-center gap-1 tracking-[2px]">
                {convertEngToPer(code)}
            </div>
        </div>
    );
};

export default Code;
