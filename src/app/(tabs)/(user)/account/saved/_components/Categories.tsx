"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "swiper/css";

const categories = ["لپتاپ", "موبایل", "تبلت", "لوازم جانبی", "سرگرمی"];

const Categories = () => {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category") || "لپتاپ";
    return (
        <ul className="mt-14 md:mt-0 flex flex-grow md:!flex-[3] items-center justify-center gap-2 md:gap-1 lg:gap-3">
            {categories.map((category, index) => (
                <li key={index} className="">
                    <Link
                        href={`?category=${category}`}
                        key={category}
                        className="bg-white flex-1 p-1 px-3 justify-between gap-2 w-auto rounded-[7.5px] transition-duration-[5]"
                        style={{
                            border:
                                category === categoryParam
                                    ? "1px solid #007fff"
                                    : "1px solid #eee",
                            transition:
                                category === categoryParam ? "0.6s" : "",
                        }}
                    >
                        <p className="text-[.8rem] text-neutral-600 font-shabt">
                            {category}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Categories;
