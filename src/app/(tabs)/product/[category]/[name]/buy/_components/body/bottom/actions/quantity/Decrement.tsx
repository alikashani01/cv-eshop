import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../../../_Context";

const Decrement = () => {
    const { onDecrement } = useContext(Context);
    return (
        <button
            className="bg-slate-800 w-[40px] h-[40px] rounded-full"
            onClick={onDecrement}
        >
            <Image
                width={18}
                height={18}
                src="/icons/dash/gray.png"
                alt=""
                className=""
            />
        </button>
    );
};

export default Decrement;
