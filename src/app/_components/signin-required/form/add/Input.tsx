import { useContext } from "react";
import { Context } from "../_Context";

const Input = () => {
    const { mobile, onChangeMobile } = useContext(Context);
    return (
        <input
            className="w-full h-[60px] text-white bg-slate-700 border border-slate-600 focus:border-blue-600 duration-300 rounded-xl p-6 pl-16 text-xl tracking-[1px] placeholder:tracking-[0px] placeholder:font-shabt"
            id="mobile"
            type="text"
            placeholder="مثال: ۰۹۱۲۲۳۴۴۴۵۵"
            value={mobile}
            onChange={onChangeMobile}
        />
    );
};

export default Input;
