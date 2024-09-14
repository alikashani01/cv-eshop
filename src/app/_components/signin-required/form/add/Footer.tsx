import { useContext } from "react";
import { Context } from "../_Context";

const Footer = () => {
    const { addMobile } = useContext(Context);
    const { error } = addMobile;
    return (
        <p className="flex items-center mb-[2px] text-[.8rem] text-red-500 font-shabt">
            {error?.message}
        </p>
    );
};

export default Footer;
