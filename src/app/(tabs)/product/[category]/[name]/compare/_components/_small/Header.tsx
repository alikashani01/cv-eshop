"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";

const Header = () => {
    const { category, name } = useParams<{
        category: string;
        name: string;
        id: string;
    }>();
    const lastPath =
        useSearchParams().get("lastPath") || `/product/${category}/${name}`;
    const { name: productName } = useContext(ProductContext);
    return (
        <header className="h-12 flex justify-start gap-[6px] items-center px-4">
            <Link href={lastPath} className="gap-[2px]">
                <Image
                    width={21}
                    height={21}
                    src="/icons/arrow/right-b.png"
                    alt=""
                    className=""
                />
                <p className="text-[.95rem] tracking-[.8px] font-sft overflow-hidden text-ellipsis text-nowrap ltr">
                    {productName.en}
                </p>
            </Link>
        </header>
    );
};

export default Header;
