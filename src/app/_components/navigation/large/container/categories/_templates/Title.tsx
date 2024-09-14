import Link from "next/link";
import { useContext } from "react";
import { NavContext } from "../../../_Context";

const Title = ({ title, href }: { title: string; href: string }) => {
    const { onOpenCategory, categoryOpen } = useContext(NavContext);
    const handleOpen = () => onOpenCategory(title);
    const handleClose = () => onOpenCategory("");
    return (
        <li
            className="h-12 flex items-center justify-center"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            onClick={handleClose}
        >
            <Link
                href={`/product/${href}/explore`}
                className={`h-full font-shabt px-4 transition-all duration-300 text-[.9rem] ${
                    categoryOpen ? "text-neutral-200" : "text-neutral-600"
                }`}
            >
                {title}
            </Link>
        </li>
    );
};

export default Title;
