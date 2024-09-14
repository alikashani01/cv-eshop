"use client";
import { Product } from "@/src/queries/product/Entities";
import convertProductFaName from "@/src/utils/convertProductFaName";
import Image from "next/image";
import Link from "next/link";
import Info from "./Info";

interface Props {
    product: Product;
    index: number;
}

export default function Item({ index, product }: Props) {
    return (
        <li
            className={`p-1 px-2 border-t border-slate-200 h-full flex flex-col items-center justify-center w-full 
                ${index % 3 !== 2 ? "border-l border-slate-200" : ""}
            `}
        >
            <Link
                className="w-full block pt-2 h-[calc(100%-40px)] overflow-hidden"
                href={`product/${product.category.en}/${convertProductFaName(
                    product.name.fa
                )}`}
            >
                <Image
                    width={1000}
                    height={1000}
                    src={product.cover[0]}
                    alt=""
                    className="w-full h-full lg:h-1/2 object-contain px-1"
                />
                <Info
                    nameEn={product.name.en}
                    price={product.pricing[0].value}
                />
            </Link>
            <div className="hidden lg:flex h-10 items-center justify-between">
                <Link
                    className="text-sm font-shabt text-white bg-blue-500 p-[3px] px-3 rounded-full"
                    href={`product/${
                        product.category.en
                    }/${convertProductFaName(product.name.fa)}/buy`}
                >
                    خرید
                </Link>
            </div>
        </li>
    );
}
