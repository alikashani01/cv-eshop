"use client";
import { Product } from "@/src/queries/product/Entities";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../_Context";

const Item = ({ product }: { product: Product }) => {
    const { selectedList, onSelect } = useContext(Context);
    return (
        <li
            key={product._id}
            className="w-full h-28 flex-grow flex items-center justify-center gap-2 p-4 border-b border-neutral-200 last:border-none"
            onClick={() => onSelect(product)}
        >
            <p className="w-full text-left ltr font-sft text-sm text-neutral-600 overflow-hidden text-ellipsis">
                {product.name.en}
            </p>
            <Image
                width={200}
                height={200}
                src={product.cover[0]}
                alt=""
                className="min-w-20 max-w-20 h-full object-contain"
            />
        </li>
    );
};

export default Item;
