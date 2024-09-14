import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "./Item";

const Code = () => {
    const { code } = useContext(Context);
    return (
        <div className="flex flex-col items-center justify-center *:text-center">
            <p className="h-5 text-[.8rem] font-shabt text-neutral-500">
                شناسه
            </p>
            <p className="text-neutral-700 tracking-[1.5px]">
                {convertEngToPer(code)}
            </p>
        </div>
    );
};

export default Code;
