import { useContext } from "react";
import { Context } from "../_Context";
import Input from "./Input";
import Submit from "./Submit";

const Add = () => {
    const { isSent, addMobile } = useContext(Context);
    return (
        !isSent && (
            <>
                <p className="flex items-center justify-center text-[.8rem] text-red-500 font-shabt">
                    {addMobile.error?.message}
                </p>
                <Input />
                <Submit />
            </>
        )
    );
};

export default Add;
