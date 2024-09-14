import Link from "next/link";
import { useContext } from "react";
import { Context } from "./ProductQuickView";
import RatingContainer from "./Rating";

const Header = () => {
    const { name, title } = useContext(Context);
    const href = name.fa.split(" ").join("-");
    return (
        <div className="flex flex-col items-center py-3 gap-2 border-b border-[#e1e1e1aa]">
            <div>
                <p className="text-center mb-1 border-b border-[#e1e1e1aa] pb-1">
                    {title?.fa}
                </p>
                <p className="font-shabmt text-[.75rem] text-center text-[#8a8a8a] tracking-[1px]">
                    {title?.en}
                </p>
                <RatingContainer />
            </div>
            <Link href={href} className="text-sm">
                اطلاعات بیشتر
            </Link>
        </div>
    );
};

export default Header;
