"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
    const lastPath = useSearchParams().get("lastPath") || "/";
    return (
        <header className="fixed top-0 w-full z-10 h-12 flex items-center justify-between bg-[#f5f5f555] border-b border-neutral-100 backdrop-blur-xl px-4 *:flex *:items-center *:flex-1">
            <div>
                <Link
                    href={lastPath}
                    className="w-[32px] h-[32px] bg-neutral-100 pl-[2px] rounded-full"
                >
                    <Image
                        width={19}
                        height={19}
                        src="/icons/arrow/right-b.png"
                        alt=""
                        priority
                    />
                </Link>
            </div>
            <div className="!flex-[3] justify-center text-neutral-600 text-[.9rem]">
                دسته‌بندی محصولات
            </div>
            <div className="justify-end"></div>
        </header>
    );
};

export default Header;
