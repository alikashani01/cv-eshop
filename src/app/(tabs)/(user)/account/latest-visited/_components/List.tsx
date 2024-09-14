"use client";

import Empty from "@/src/app/_components/_modules/Empty";
import Image from "next/image";
import Link from "next/link";
import useLatestVisitedStore from "../store";
import { usePathname } from "next/navigation";

const List = () => {
    const pathname = usePathname();
    const products = useLatestVisitedStore((s) => s.products);
    const setAdd = useLatestVisitedStore((s) => s.setAdd);
    return (
        <ul className="">
            <Empty
                message="محصولی دیده نشده!"
                length={products.length}
                padding="40px"
            />
            {products.map((product) => (
                <li
                    key={product._id}
                    className="flex items-center justify-between p-2 px-6 pl-[22px] border-b border-neutral-100"
                >
                    <Link
                        className="justify-start py-2 gap-3"
                        href={`/product/${product.categoryEn}/${product.nameFa
                            .split(" ")
                            .join("-")}?lastPath=${pathname}`}
                    >
                        <Image
                            width={100}
                            height={100}
                            src={product.cover}
                            alt={product.nameFa}
                            className="min-w-[60px] max-w-[60px] h-[60px] object-contain text-[.6rem] text-neutral-700"
                        />
                        <div>
                            <p className="text-sm text-neutral-700">
                                {product.nameFa}
                            </p>
                            <p className="mt-1 text-[.8rem] text-[#888] font-sfl">
                                {product.brandEn}
                            </p>
                        </div>
                    </Link>
                    <button
                        className="min-w-[20px]"
                        onClick={() => setAdd(product)}
                    >
                        <Image
                            width={20}
                            height={20}
                            src="/icons/trash/red.png"
                            alt=""
                            className=""
                        />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default List;
