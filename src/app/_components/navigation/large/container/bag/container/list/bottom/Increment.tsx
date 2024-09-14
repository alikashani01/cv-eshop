import useBagStore from "@/src/queries/order/bag/store";
import { useContext } from "react";
import { Context } from "../Item";

const Increment = () => {
    const item = useContext(Context);
    const increment = useBagStore((s) => s.incrementBag);
    return (
        <button
            className="bg-neutral-200 w-[35px] h-[35px] rounded-full"
            onClick={() => increment(item)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#666666"
                className="bi bi-plus"
                viewBox="0 0 16 16"
            >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
        </button>
    );
};

export default Increment;
