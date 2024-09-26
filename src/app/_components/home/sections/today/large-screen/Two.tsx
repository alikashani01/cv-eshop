"use client";

import Price from "@/src/app/_components/_modules/Price";
import { Product } from "@/src/queries/product/Entities";
import convertProductFaName from "@/src/utils/convertProductFaName";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../_Context";

const Two = ({ product }: { product: Product }) => {
    const { setProductDetails, handleOpen } = useContext(Context);
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (el) {
            document.addEventListener("scroll", () => {
                const windowHeight = window.innerHeight;
                const elTop = el.getBoundingClientRect().top;
                if (elTop <= windowHeight - 50) {
                    el.style.transform = "translateY(0)";
                    el.style.transition = "1s ease";
                } else {
                    el.style.transform = "translateY(50px)";
                    el.style.transition = "1s ease";
                }
            });
        }
    }, [ref.current]);
    return (
        <div
            ref={ref}
            className="row-span-1 col-span-1 flex items-center justify-between gap-4 p-4"
        >
            <div className="flex-1">
                <Link
                    href={`product/${
                        product.category.en
                    }/${convertProductFaName(
                        product.title?.fa || product.name?.fa
                    )}`}
                    className="block text-left py-4"
                >
                    <p className="font-sfl text-[.95rem] tracking-wide leading-5 text-neutral-600">
                        {product.name?.en}
                    </p>
                    <p className="text-[.8rem] font-shabt text-gray-400">
                        {product.name?.fa}
                    </p>
                    <p className="text-[.8rem] font-shabt text-gray-400 mt-[2px]">
                        {product.subCategories.length > 0 &&
                            product.subCategories[0].fa}
                    </p>
                </Link>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            className="bg-blue text-white p-1 px-4 rounded-full text-sm"
                            href={`/product/${
                                product.category.en
                            }/${convertProductFaName(product.name.fa)}/buy`}
                        >
                            خرید
                        </Link>
                        <Price price={product.pricing[0].value} />
                    </div>
                    <button
                        className="w-8 h-8 rounded-full bg-white"
                        onClick={() => {
                            setProductDetails(product);
                            handleOpen();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#777"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <Link
                href={`product/${product.category.en}/${convertProductFaName(
                    product.title?.fa || product.name?.fa
                )}`}
                className="flex-1"
            >
                <Image
                    width={2000}
                    height={2000}
                    src={product.cover[0]}
                    alt=""
                    className="w-full h-[200px] object-contain"
                />
            </Link>
        </div>
    );
};

export default Two;
