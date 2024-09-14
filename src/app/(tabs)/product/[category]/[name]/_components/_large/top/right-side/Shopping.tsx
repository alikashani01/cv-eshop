import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";

const Shopping = () => {
    const pathname = usePathname();
    const { pricing } = useContext(ProductContext);
    return (
        <div className="flex items-center gap-4">
            <Link
                className="bg-blue-600 text-white text-sm p-1 px-4 rounded-full"
                href={`${pathname}/buy`}
            >
                خرید
            </Link>
            <div className="flex items-center gap-1">
                {pricing.length > 1 && (
                    <p className="text-[.9rem] text-neutral-400 font-shabt">
                        از
                    </p>
                )}
                <p className="text-lg tracking-[.5px]">
                    {pricing[0].value.toLocaleString("fa")}
                </p>
                <p className="text-[.8rem] text-[#777] font-shabt">تومان</p>
            </div>
        </div>
    );
};

export default Shopping;
