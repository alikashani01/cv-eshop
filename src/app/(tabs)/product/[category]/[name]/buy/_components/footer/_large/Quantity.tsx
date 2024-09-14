import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Quantity = () => {
    const {
        onIncrement,
        onDecrement,
        data: { quantity },
        itemExists,
    } = useContext(Context);
    return (
        <div className="flex items-center gap-4 *:bg-neutral-200 *:w-10 *:h-10 *:rounded-full">
            <button onClick={onIncrement}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    fill="#444"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
            </button>
            <button onClick={onDecrement}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    fill="#444"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
            </button>
            <p className="w-12 flex items-center justify-center text-2xl pt-[2px]">
                {itemExists
                    ? convertEngToPer(itemExists.quantity)
                    : convertEngToPer(quantity)}
            </p>
        </div>
    );
};

export default Quantity;
