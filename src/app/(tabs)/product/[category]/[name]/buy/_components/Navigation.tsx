"use client";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../../_Context";

const Navigation = () => {
    const { category, subCategories, brand, name } = useContext(ProductContext);

    const Separator = () => (
        <span className="mb-[2px] font-shabt text-[.9rem] text-neutral-500">
            /
        </span>
    );

    const Label = ({ label }: { label: string }) => (
        <span className="text-[.8rem] text-neutral-500 font-shabt">
            {label}
        </span>
    );

    return (
        <nav className="h-7 lg:h-10 flex items-start lg:items-center gap-[5px] px-5 lg:px-[8%]">
            <Link href={`/product/${category.en}/explore`}>
                <Label label={category.fa} />
            </Link>
            {subCategories[0]?.en && (
                <>
                    <Separator />
                    <Link
                        href={`/product/${category.en}/explore?application=${subCategories[0]?.fa}`}
                    >
                        <Label label={subCategories[0]?.fa} />
                    </Link>
                </>
            )}
            {brand?.fa && (
                <>
                    <Separator />
                    <Link
                        href={`/product/${category.en}/explore?brand=${brand?.fa}`}
                    >
                        <Label label={brand?.fa} />
                    </Link>
                </>
            )}
            <div className="hidden lg:flex items-center gap-[5px]">
                <Separator />
                <Link
                    href={`/product/${category.en}/${name.fa
                        .split(" ")
                        .join("-")}`}
                >
                    <Label label={name.fa} />
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
