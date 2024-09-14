"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import First from "./First";
import Second from "./Second";
import "./styles.css";
import styles from "./styles.module.css";
import Third from "./Third";

const Banners = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="py-10 min-h-[80vh]">
            <Swiper
                id="homeBannersSwiper"
                className="navigation-swiper"
                slidesPerView={1}
                spaceBetween={15}
                speed={500}
                keyboard={true}
                navigation={true}
                modules={[Navigation, Pagination, Keyboard]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                <SwiperSlide
                    id={activeIndex === 0 ? styles.active : styles.deactive}
                    className={styles.slider}
                >
                    <First activeIndex={activeIndex} />
                </SwiperSlide>
                <SwiperSlide
                    id={activeIndex === 1 ? styles.active : styles.deactive}
                    className={styles.slider}
                >
                    <Second activeIndex={activeIndex} />
                </SwiperSlide>
                <SwiperSlide
                    id={activeIndex === 2 ? styles.active : styles.deactive}
                    className={styles.slider}
                >
                    <Third activeIndex={activeIndex} />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banners;
