import useSearch from "@/src/queries/product/search/useSearch";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../_Context";

const Results = () => {
    const { keyword, query } = useContext(Context);
    const { data: products, isPending } = useSearch(query);
    if (!products) return null;

    return (
        <div className="p-1 px-4 no-scrollbar w-[400px] mx-auto">
            {isPending ? (
                <div className="flex items-center justify-center mt-10">
                    <CircularProgress size={15} sx={{ color: "#888" }} />
                </div>
            ) : (
                <>
                    {keyword && (
                        <div className="pt-2 flex items-center gap-2">
                            <p className="text-lg tracking-[1px] text-neutral-200 mb-2">
                                نتایج
                            </p>
                            <p className="text-[1.2rem] font-shabmb mb-2">
                                {products.length > 0
                                    ? products.length
                                    : "بدون نتیجه!"}
                            </p>
                        </div>
                    )}
                    <ul className="text-left">
                        {products?.map((product) => (
                            <li key={product._id}>
                                <Link
                                    className="ltr  justify-start py-2 border-b border-neutral-300"
                                    href={`/product/${product._id}/${product.title}?query=${keyword}`}
                                >
                                    <div className="flex items-center justify-start gap-2 ">
                                        <Image
                                            width={45}
                                            height={45}
                                            src={product.cover[0]}
                                            alt={product.title?.fa || ""}
                                            className="min-w-16 max-w-16 h-20 object-contain"
                                        />
                                        <p className="text-10 font-sfl text-neutral-600 text-[.9rem] tracking-wide">
                                            {product.name.en}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Results;
