"use client";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../_Context";
import Item from "./item/Item";
import "./styles.css";

const Articles = () => {
    const { media } = useContext(ProductContext);
    return (
        <div className="pb-4 pt-3">
            <p className="text-xl font-shabb text-neutral-600 px-6 lg:px-[8%] mb-2">
                مقالات
            </p>
            <Swiper
                id="swiperNavigationProductMedia"
                slidesPerView={"auto"}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={true}
            >
                {media?.articles?.map((article, index) => (
                    <SwiperSlide
                        id="swiperNavigationProductMediaSlider"
                        key={index}
                    >
                        <Item article={article} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Articles;
