"use client";
import useSearch from "@/src/queries/product/search/useSearch";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../_Context";

const Results = () => {
    const { keyword, query } = useContext(Context);
    const { data: products, isPending } = useSearch(query);
    return (
        keyword && (
            <div className="no-scrollbar pt-4 px-4">
                {isPending ? (
                    <div className="flex items-center justify-center mt-10">
                        <CircularProgress size={15} sx={{ color: "#888" }} />
                    </div>
                ) : (
                    keyword && (
                        <>
                            <p className="font-shab text-neutral-500 mb-2">
                                نتایج
                            </p>
                            <ul className="text-left pb-36">
                                {products?.map((product) => (
                                    <li key={product._id}>
                                        <Link
                                            className="justify-end py-2 border-b border-neutral-100"
                                            href={`/product/${
                                                product.category.en
                                            }/${product.name.fa
                                                .split(" ")
                                                .join("-")}?query=${keyword}`}
                                        >
                                            <div className="flex items-center justify-end gap-2 ">
                                                <p className="text-neutral-600 font-sft text-[.92rem] tracking-wide">
                                                    {product.name.en}
                                                </p>
                                                <Image
                                                    width={45}
                                                    height={45}
                                                    src={product.cover[0]}
                                                    alt=""
                                                    className="min-w-[45px] max-w-[45px] h-[45px] object-contain text-[.6rem] text-neutral-800"
                                                />
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )
                )}
            </div>
        )
    );
};

export default Results;
