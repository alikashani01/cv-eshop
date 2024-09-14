import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../_Context";

const Resend = () => {
    const { addMobile, mobile } = useContext(Context);

    const { isSuccess, isPending } = addMobile;

    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            counter > 0 && setCounter(counter - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [counter]);

    useEffect(() => {
        isSuccess && setCounter(3);
    }, [isSuccess]);
    return (
        <button
            type="button"
            className="gap-2"
            onClick={() => {
                mobile && addMobile.mutate(mobile);
            }}
            disabled={isPending || counter > 0}
        >
            {isPending && <CircularProgress size={15} sx={{ color: "#888" }} />}
            <span className="text-sm">ارسال مجدد</span>
            {counter > 0 && (
                <span className="text-sm">{convertEngToPer(counter)}</span>
            )}
        </button>
    );
};

export default Resend;
