import { categories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
    return (
        <section className="mt-4 md:mt-16 px-4 md:px-[8%] pb-16">
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <li key={category.href}>
                        <Link
                            className="flex-col bg-second-theme rounded-2xl p-4"
                            href={`product/${category.href}/explore?lastPath=/`}
                        >
                            <p className="h-8 self-start pr-2 text-orange-500 text-[.85rem]">
                                {category.title}
                            </p>
                            <Image
                                width={100}
                                height={100}
                                src={category.photo}
                                alt={category.title}
                                priority
                                className="w-[100%] h-[90px] p-[2px] object-contain"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
