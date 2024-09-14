import { useContext } from "react";
import { Context } from "../Item";

const Storage = () => {
    const { storage } = useContext(Context);
    return (
        <p className="flex items-center gap-[6px]">
            <span className="text-neutral-600 text-xl">{storage.capacity}</span>
            <span className="text-neutral-500 text-[.8rem] font-shabt">
                {storage.unit}
            </span>
        </p>
    );
};

export default Storage;
