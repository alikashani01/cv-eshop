import useBagStore from "@/src/queries/order/bag/store";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Item";

const Remove = () => {
    const item = useContext(Context);
    const remove = useBagStore((s) => s.setRemoveItem);
    return (
        <button
            className="w-[30px] h-[30px] absolute top-2 right-2 rounded-full bg-slate-100"
            onClick={() => remove(item)}
        >
            <Image
                width={18}
                height={18}
                src="/icons/trash/red.png"
                alt=""
                className=""
            />
        </button>
    );
};

export default Remove;
