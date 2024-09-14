"use client";
import { useContext } from "react";
import { ProductContext } from "../../_Context";

const SubHeader = () => {
    const { name } = useContext(ProductContext);
    return (
        <div className="lg:hidden sticky top-0 left-0 z-10 h-10 lg:h-14 flex items-center justify-center gap-[6px] px-4 lg:px-[8%] bg-[#fff5] backdrop-blur-xl border-b border-[#f5f5f733]">
            <p className="ltr text-center uppercase font-sfb text-neutral-600 tracking-[.5px]">
                {name.en}
            </p>
        </div>
    );
};

export default SubHeader;
