import { useContext } from "react";
import { Context } from "./_Context";
import { CircularProgress } from "@mui/material";

const Header = () => {
    const { onSubmit, handleSubmit, isLoading } = useContext(Context);
    return (
        <>
            <p className="text-neutral-600 text-[1.05rem]">آدرس جدید</p>
            <div />
            <div className="justify-end">
                <button
                    className="gap-2"
                    disabled={isLoading}
                    onClick={handleSubmit(onSubmit)}
                >
                    {isLoading && <CircularProgress size={15} />}
                    ثبت آدرس
                </button>
            </div>
        </>
    );
};

export default Header;
