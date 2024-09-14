import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Quantity = () => {
    const { itemExists, onAddItem, onIncrement, onDecrement } =
        useContext(Context);
    return (
        <div className="md:hidden">
            {itemExists ? (
                <button onClick={onAddItem}>
                    <Image
                        width={22}
                        height={22}
                        src="/icons/trash/red.png"
                        alt=""
                        className=""
                    />
                </button>
            ) : (
                <div className="flex items-center *:w-14 h-9 *:h-full rounded-2xl bg-slate-200">
                    <button
                        onClick={onIncrement}
                        className="border-l border-slate-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="33"
                            fill="#666"
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
                            fill="#666"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quantity;
