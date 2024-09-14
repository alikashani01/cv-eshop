import { useContext } from "react";
import { Context } from "../_Context";

const Error = () => {
    const {
        editMobile: { error },
    } = useContext(Context);
    return (
        <p className="mr-1 mt-2 h-4 text-rose-500 text-sm font-shabt">
            {error?.message}
        </p>
    );
};

export default Error;
