import { useContext } from "react";
import { Context } from "../_Context";
import Resend from "./Resend";

const Actions = () => {
    const { data, onVerify } = useContext(Context);
    return (
        <div className="w-full h-14 flex items-center justify-between px-2">
            <button className="mr-4 text-sm" onClick={onVerify}>
                تغییر شماره موبایل
            </button>
            <Resend mobile={data} />
        </div>
    );
};

export default Actions;
