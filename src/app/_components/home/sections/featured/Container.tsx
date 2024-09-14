"use client";
import { Product } from "@/src/queries/product/Entities";
import { useEffect, useRef } from "react";
import Item from "./item/Item";

interface Props {
    title: string;
    products: Product[] | undefined;
}

const Container = ({ title, products }: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (el) {
            document.addEventListener("scroll", () => {
                const windowHeight = window.innerHeight;
                const elTop = el.getBoundingClientRect().top;
                if (elTop <= windowHeight) {
                    el.style.transform = "translateY(0)";
                    el.style.transition = "2s ease";
                } else {
                    el.style.transform = "translateY(50px)";
                    el.style.transition = "0s ease";
                }
            });
        }
    }, [ref.current]);
    return (
        <section
            ref={ref}
            className="h-[416px] lg:h-[550px] bg-second-theme rounded-2xl"
        >
            <p className="h-16 flex items-center p-6">{title}</p>
            <ul className="h-[calc(100%-64px)] grid grid-cols-3 grid-rows-2">
                {products?.map((product, index) => (
                    <Item key={product._id} product={product} index={index} />
                ))}
            </ul>
        </section>
    );
};

export default Container;
