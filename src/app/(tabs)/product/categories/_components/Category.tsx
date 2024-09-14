import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    title: string;
    href: string;
    children: ReactNode;
}

const Category = ({ children, title, href }: Props) => {
    return (
        <li>
            <Link
                href={href}
                className="flex-col bg-second-theme rounded-2xl p-4"
            >
                <p className="self-start mb-3 text-[#FF4500] text-[.9rem]">
                    {title}
                </p>
                {children}
            </Link>
        </li>
    );
};

export default Category;
