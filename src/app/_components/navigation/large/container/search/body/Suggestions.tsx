import useSearchSuggestions from "@/src/queries/product/search/useSearchSuggestions";
import convertProductFaName from "@/src/utils/convertProductFaName";
import Image from "next/image";
import Link from "next/link";

export default function Suggestions() {
    const { data: products } = useSearchSuggestions();
    return (
        <div className="flex-[3]">
            <p className="text-sm text-neutral-600 pr-2 mb-1">
                محصولات پیشنهادی‌
            </p>
            <ul>
                {products?.map((product, index) => (
                    <li key={index} className="py-1 ltr text-left">
                        <Link
                            href={`/product/${
                                product?.category.en
                            }/${convertProductFaName(
                                product?.title?.fa || product?.name?.fa
                            )}`}
                            className="py-1 gap-3 justify-start bg-white/70 p-2 rounded-xl"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={product.cover[0]}
                                alt=""
                                className="object-contain w-14 h-16"
                            />
                            <p className="font-sfl text-neutral-600 text-[.8rem] tracking-wider">
                                {product?.name.en}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
