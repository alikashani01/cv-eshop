import { useContext } from "react";
import { Context } from "./Item";

const Status = () => {
    const { status } = useContext(Context);
    return (
        <div className="flex flex-col items-center justify-center border-r border-neutral-100 *:text-center">
            <p className="h-5 text-[.8rem] font-shabt text-neutral-500">
                وضعیت
            </p>
            <p className="text-neutral-700 text-sm">{status}</p>
        </div>
    );
};

export default Status;
