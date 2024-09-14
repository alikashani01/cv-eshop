"use client";

import Price from "@/src/app/_components/_modules/Price";
import { Product } from "@/src/queries/product/Entities";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../_Context";
import convertProductFaName from "@/src/utils/convertProductFaName";

const Five = ({ product }: { product: Product }) => {
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
                <div className="text-left py-4">
                    <p className="font-sfl text-[.95rem] tracking-wide leading-5">
                        {product?.name?.en}
                    </p>
                    <p className="text-[.8rem] font-shabt text-gray-400">
                        {product?.name?.fa}
                    </p>
                    <p className="text-[.8rem] font-shabt text-gray-400 mt-[2px]">
                        {product?.subCategories.length > 0 &&
                            product?.subCategories[0].fa}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            className="bg-blue-600 text-white p-1 px-4 rounded-full text-sm"
                            href={`/product/${
                                product.category.en
                            }/${convertProductFaName(product.name.fa)}/buy`}
                        >
                            خرید
                        </Link>
                        <Price price={product?.pricing[0].value} />
                    </div>
                    <button
                        className="w-9 h-9 rounded-full bg-white"
                        onClick={() => {
                            setProductDetails(product);
                            handleOpen();
                        }}
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/icons/add.png"
                            alt=""
                        />
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <Image
                    width={2000}
                    height={2000}
                    src={product?.cover[0]}
                    alt=""
                    className="w-full h-[200px] object-contain"
                />
            </div>
        </div>
    );
};

export default Five;
