import { useContext } from "react";
import { Context } from "../_Context";

const Input = () => {
    const {
        data,
        onChange,
        editMobile: { error },
    } = useContext(Context);
    return (
        <input
            style={{ textAlign: "center" }}
            className={`w-full h-16 px-6 pt-1 bg-slate-700 border rounded-xl text-center text-neutral-200 text-2xl font-shabb tracking-[4px] focus:border-blue-500 transition-all duration-500 ${
                error ? "border-rose-600" : "border-slate-600"
            }`}
            type="text"
            inputMode="numeric"
            id="mobile"
            value={data}
            onChange={onChange}
        />
    );
};

export default Input;
