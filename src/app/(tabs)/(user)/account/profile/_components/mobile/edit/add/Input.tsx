import { useContext } from "react";
import { Context } from "../_Context";

const Input = () => {
    const { mobile, onChangeMobile } = useContext(Context);
    return (
        <div className="h-36 flex items-center justify-center px-4">
            <input
                className="w-full max-w-[400px] h-[60px] pt-[2px] px-6 bg-slate-700 border border-slate-600 focus:border-blue-600 duration-300 rounded-2xl text-lg text-center text-white tracking-[3px]"
                id="mobile"
                type="text"
                inputMode="numeric"
                placeholder="۰۹۱۲۲۳۴۴۴۵۵"
                value={mobile}
                onChange={onChangeMobile}
            />
        </div>
    );
};

export default Input;
