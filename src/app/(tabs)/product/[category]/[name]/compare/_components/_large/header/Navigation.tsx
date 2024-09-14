"use client";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";

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
        <nav className="flex items-center gap-[5px]">
            <Link href={`/product/${category.en}`}>
                <Label label={category.fa} />
            </Link>
            {subCategories[0]?.en && (
                <>
                    <Separator />
                    <Link
                        href={`/product/${category.en}?application=${subCategories[0]?.fa}`}
                    >
                        <Label label={subCategories[0]?.fa} />
                    </Link>
                </>
            )}
            {brand?.fa && (
                <>
                    <Separator />
                    <Link href={`/product/${category.en}?brand=${brand?.fa}`}>
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
