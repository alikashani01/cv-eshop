import { useContext } from "react";
import { Context } from "../Item";

const Color = () => {
    const { color } = useContext(Context);
    return (
        <p className="flex items-center gap-2 my-2">
            <span
                style={{
                    background: color.code,
                }}
                className="w-5 h-5 rounded-full"
            ></span>
            <span className="text-neutral-500 text-sm font-shabt">
                {color.fa}
            </span>
        </p>
    );
};

export default Color;
