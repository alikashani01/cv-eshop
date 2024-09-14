import Image from "next/image";
import { useContext } from "react";
import { NavContext } from "../../../_Context";
import Link from "next/link";

interface Props {
    options: {
        photo?: string;
        nameFa?: string;
        nameEn?: string;
        value: string;
    }[];
    title: string;
    category: string;
    query: string;
}

const Container = ({ category, query, title, options }: Props) => {
    const { categoryOpen: open, setCategoryOpen } = useContext(NavContext);
    return (
        <div className="py-[2.5%] p-[5%] *:mb-2">
            <p className="text-[.92rem] text-neutral-400 mb-2">{title}</p>
            {options.map((item, i) => (
                <div key={item.nameEn}>
                    <Link
                        href={`/product/${category}/explore?${query}=${item.value
                            .split(" ")
                            .join("-")}`}
                        className={`flex items-center justify-start gap-3 py-2
                        ${
                            open
                                ? "text-[#1a1a1a] opacity-1 translate-y-0 transition-all duration-700"
                                : "text-black opacity-0 translate-y-2"
                        }`}
                        onClick={() => setCategoryOpen("")}
                        style={{ transitionDelay: `${i / 10}s` }}
                    >
                        {item.photo && (
                            <Image
                                width={30}
                                height={30}
                                src={item.photo || ""}
                                alt={item.nameEn || ""}
                                className=""
                            />
                        )}
                        <p className="text-[.9rem] text-neutral-200">
                            {item.nameFa || item.nameEn}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Container;
