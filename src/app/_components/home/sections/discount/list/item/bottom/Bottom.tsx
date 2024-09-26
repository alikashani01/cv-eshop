import Link from "next/link";
import { useContext } from "react";
import { Context } from "../Item";

const Bottom = () => {
    const { category, name, pricing } = useContext(Context);
    return (
        <div className="bg-[#eaeaea55] flex items-center justify-between px-4 h-12">
            <Link
                href={`/product/${category.en}/${name.fa}/buy`}
                className="bg-[#007aff] text-white p-[2px] px-4 text-[.9rem] rounded-full"
            >
                خرید
            </Link>
            <div className="flex items-center justify-between">
                <p className="flex items-center justify-center gap-1 text-ellipsis text-wrap overflow-hidden">
                    <span className="text-neutral-600 tracking-[2px]">
                        {pricing?.[0].value.toLocaleString("fa")}
                    </span>
                    <span className="text-[.65rem] text-[#999] font-shabt">
                        تومان
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Bottom;
