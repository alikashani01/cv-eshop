"use client";
import useFetchSavedProducts from "@/src/queries/product/save/useFetchList";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Save from "./Save";
import Empty from "@/src/app/_components/_modules/Empty";

const List = () => {
    const pathname = usePathname();
    const category = useSearchParams().get("category") || "لپتاپ";
    const { data: products, isPending } = useFetchSavedProducts();
    if (isPending)
        return (
            <div className="flex items-center justify-center mt-14">
                <CircularProgress size={16} sx={{ color: "#aaa" }} />
            </div>
        );
    if (products?.length === 0) return <Empty message="محصولی ذخیره نشده!" />;
    return (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-4 p-4 lg:p-6">
            {products?.map(
                (product) =>
                    category === product.category.fa && (
                        <li
                            key={product._id}
                            className="w-full h-22 bg-second-theme lg:bg-white rounded-2xl p-3 px-4 flex items-center justify-between"
                        >
                            <div className="min-w-[40px]">
                                <Save id={product._id!} />
                            </div>
                            <Link
                                href={`/product/${product.category.en}/${product._id}/${product.name.en}?lastPath=${pathname}`}
                                className="h-full justify-end gap-4"
                            >
                                <p className="font-sft flex-grow text-neutral-600 tracking-[1px] text-left text-sm">
                                    {product.name.en}
                                </p>
                                <Image
                                    width={70}
                                    height={70}
                                    src={product.cover[0]}
                                    alt=""
                                    className="min-w-[70px] max-w-[70px] h-[70px] object-contain"
                                    priority
                                />
                            </Link>
                        </li>
                    )
            )}
        </ul>
    );
};

export default List;
