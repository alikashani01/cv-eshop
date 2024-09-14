"use client";

import { Product } from "@/src/queries/product/Entities";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./item/Item";
import "./styles.css";

const List = ({ products }: { products: Product[] }) => {
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
        <div ref={ref}>
            <Swiper
                id="homeSkillsSwiper"
                slidesPerView={"auto"}
                spaceBetween={15}
                modules={[Navigation]}
                navigation={true}
            >
                {products?.map((product) => (
                    <SwiperSlide id="homeSkillsSwiperSlider" key={product._id}>
                        <Item product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default List;
