import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Context } from "../_Context";

const SubmitButton = () => {
    const { data, editMobile } = useContext(Context);
    const { isPending } = editMobile;
    return (
        <div className="w-full h-14 flex items-center justify-center">
            <button
                className=" h-full gap-2 rounded-xl"
                disabled={isPending || !data}
            >
                {isPending && (
                    <CircularProgress size={15} sx={{ color: "#088e0" }} />
                )}
                دریافت کد تایید
            </button>
        </div>
    );
};

export default SubmitButton;
