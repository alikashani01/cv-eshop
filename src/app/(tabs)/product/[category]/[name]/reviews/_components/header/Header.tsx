"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";

const Header = () => {
    const { category, name } = useContext(ProductContext);
    return (
        <header className="lg:hidden w-full h-12 flex items-center justify-between px-5 md:px-[5%] lg:px-[8%]">
            <Link href={`/product/${category.en}/${name?.fa}`}>
                <Image
                    width={20}
                    height={20}
                    src="/icons/arrow/right-b.png"
                    alt=""
                />
            </Link>

            <p className="w-[calc(100%-30px)] ltr overflow-hidden text-ellipsis text-nowrap text-left font-sfr tracking-[.5px]">
                {name.en}
            </p>
        </header>
    );
};

export default Header;
