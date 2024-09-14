import { useContext } from "react";
import { Context } from "../_Context";
import { CircularProgress } from "@mui/material";

const Submit = () => {
    const { mobile, addMobile } = useContext(Context);
    const { isPending } = addMobile;
    return (
        <button
            className="absolute left-4"
            onClick={() => addMobile.mutate({ mobile })}
            disabled={!mobile || mobile.length < 11 || !mobile.startsWith("۰")}
        >
            {isPending ? (
                <CircularProgress size={16} />
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                </svg>
            )}
        </button>
    );
};

export default Submit;
