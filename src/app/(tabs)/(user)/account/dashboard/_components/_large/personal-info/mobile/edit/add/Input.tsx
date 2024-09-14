import { useContext } from "react";
import { Context } from "../_Context";

const Input = () => {
    const { mobile, onChangeMobile } = useContext(Context);
    return (
        <input
            className="w-full h-[65px] bg-[unset] text-white border-y border-slate-600 focus:border-blue-600 duration-300 rounded-none p-6 pl-16 text-xl tracking-[1px]"
            id="mobile"
            type="text"
            placeholder="۰۹۱۲۲۳۴۴۴۵۵"
            value={mobile}
            onChange={onChangeMobile}
        />
    );
};

export default Input;
