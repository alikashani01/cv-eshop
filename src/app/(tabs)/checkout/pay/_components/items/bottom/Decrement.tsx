import useBagStore from "@/src/queries/order/bag/store";
import { useContext } from "react";
import { Context } from "../Item";

const Decrement = () => {
    const item = useContext(Context);
    const decrement = useBagStore((s) => s.decrementBag);
    return (
        <button
            className="bg-neutral-200 w-[35px] h-[35px] rounded-full"
            onClick={() => decrement(item)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#666666"
                className="bi bi-dash"
                viewBox="0 0 16 16"
            >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
        </button>
    );
};

export default Decrement;
