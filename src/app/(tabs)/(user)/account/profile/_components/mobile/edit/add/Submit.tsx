import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Context } from "../_Context";

const Submit = () => {
    const { mobile, addMobile, onSent } = useContext(Context);
    const { isPending } = addMobile;
    return (
        <div className="h-14">
            <button
                className="gap-2 p-[8px] px-4 mx-auto text-sm bg-[#007fff] text-white rounded-2xl disabled:bg-neutral-300"
                onClick={() => addMobile.mutate(mobile)}
                disabled={isPending || !mobile}
                // onClick={onSent}
            >
                {isPending && <CircularProgress size={16} />}
                دریافت کد تایید
            </button>
        </div>
    );
};

export default Submit;
