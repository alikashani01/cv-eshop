import { Product } from "@/src/queries/product/Entities";
import convertProductFaName from "@/src/utils/convertProductFaName";
import Image from "next/image";
import Link from "next/link";

interface Props {
    open: boolean;
    onOpen: () => void;
    product: Product;
}

const Footer = ({ product, open, onOpen }: Props) => {
    return (
        <div className="h-16 flex items-center justify-between px-4">
            <div
                className={`flex items-center gap-2 transition duration-300
                ${open ? "opacity-0 invisible" : "opacity-1 visible"}
                `}
            >
                <Link
                    className="bg-[#007fff] text-white p-[5px] rounded-full text-sm px-4"
                    href={`/product/${
                        product.category.en
                    }/${convertProductFaName(product.name.fa)}/buy`}
                >
                    خرید
                </Link>
                <div className="flex items-center gap-1">
                    <p className="tracking-[2px]">
                        {product.pricing![0].value.toLocaleString("fa")}
                    </p>
                    <p className="text-[.8rem] text-[#888] font-shabmt">
                        تومان
                    </p>
                </div>
            </div>
            <Image
                width={38}
                height={38}
                src="/icons/add.png"
                alt=""
                className={`${
                    open ? "rotate-[45deg]" : ""
                } transition duration-300 bg-white border-neutral-600 p-[10px] rounded-full`}
                onClick={onOpen}
            />
        </div>
    );
};

export default Footer;
