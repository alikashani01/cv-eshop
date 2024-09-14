import { useContext } from "react";
import { Context } from "../_Context";

const Input = () => {
    const { mobile, onChangeMobile } = useContext(Context);
    return (
        <input
            className="w-full h-[60px] bg-[#fafafa] shadow-md shadow-[#cbd5e177] border border-neutral-100 focus:border-blue-500 duration-300 rounded-xl p-6 pl-16 text-xl tracking-[1px]"
            id="mobile"
            type="text"
            inputMode="numeric"
            placeholder="مثال: ۰۹۱۲۲۳۴۴۴۵۵"
            value={mobile}
            onChange={onChangeMobile}
        />
    );
};

export default Input;
