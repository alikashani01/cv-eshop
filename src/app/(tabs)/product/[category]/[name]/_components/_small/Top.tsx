import { useContext } from "react";
import { ProductContext } from "../../_Context";

const Top = () => {
    const { name, model } = useContext(ProductContext);
    return (
        <div className="flex flex-col justify-between items-center px-4 py-2">
            <p className="font-sfr text-center text-lg text-neutral-600 tracking-[.8px] py-1">
                {name.en}
            </p>
            <p className="text-[.78rem] text-neutral-600 font-shabt">
                {name.fa}
            </p>
            <p className="font-sft text-[.75rem] pt-[2px] text-neutral-600 tracking-[1.5px]">
                {model}
            </p>
        </div>
    );
};

export default Top;
