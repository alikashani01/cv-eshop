import useAdd from "@/src/queries/user/login/useAdd";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Resend = ({ mobile }: { mobile: string }) => {
    const register = useAdd();
    const { isSuccess, isPending } = register;

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
                mobile && register.mutate({ mobile });
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
