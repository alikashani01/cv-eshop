import { useContext } from "react";
import { Context } from "../../../_Context";
import Quantity from "../_small/Quantity";

const Add = () => {
    const { onAddItem } = useContext(Context);
    return (
        <>
            <Quantity />
            <button
                className="bg-blue text-white h-full px-5 text-sm rounded-full"
                onClick={onAddItem}
            >
                افزودن به سبد خرید
            </button>
        </>
    );
};

export default Add;
