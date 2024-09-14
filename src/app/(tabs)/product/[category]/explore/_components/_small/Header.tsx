"use client";

import convertCategory from "@/src/utils/convertCategory";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Header = () => {
    const { category } = useParams<{ category: string }>();

    return (
        <header className="lg:hidden w-full h-12 flex items-center justify-between bg-[#f5f5f555] border-b border-neutral-100 backdrop-blur-xl px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link href="/product/categories" className="text-sm">
                    <Image
                        width={18}
                        height={18}
                        src="/icons/arrow/right-b.png"
                        alt=""
                        priority
                    />
                    دسته‌بندی
                </Link>
            </div>
            <div className="!flex-[2] justify-center text-neutral-600 text-[.95rem]">
                {convertCategory(category)}
            </div>
            <div className="justify-end"></div>
        </header>
    );
};

export default Header;
