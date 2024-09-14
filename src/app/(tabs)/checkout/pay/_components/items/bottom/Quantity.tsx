import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../Item";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Quantity = () => {
    const { quantity } = useContext(Context);
    return (
        <div className="flex items-center gap-2">
            <Increment />
            <Decrement />
            <p className="flex items-center justify-center text-lg pt-[2px] bg-neutral-200 w-[35px] h-[35px] rounded-full">
                {convertEngToPer(quantity)}
            </p>
        </div>
    );
};

export default Quantity;
