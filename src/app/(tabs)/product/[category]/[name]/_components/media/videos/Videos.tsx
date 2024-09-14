import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../_Context";
import Item from "./Item";
import "./styles.css";

const Videos = () => {
    const { media } = useContext(ProductContext);
    return (
        <div className="pb-4 pt-3">
            <p className="text-xl font-shabb text-neutral-600 px-6 lg:px-[8%] mb-2">
                مدیا
            </p>
            <Swiper
                id="swiperNavigationProductMedia"
                slidesPerView={"auto"}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={true}
            >
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103162/PROJECTS/Store/Videos/macs_vb9kps.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103129/PROJECTS/Store/Videos/iphone15_u9kkqj.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103162/PROJECTS/Store/Videos/macs_vb9kps.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103129/PROJECTS/Store/Videos/iphone15_u9kkqj.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103162/PROJECTS/Store/Videos/macs_vb9kps.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103129/PROJECTS/Store/Videos/iphone15_u9kkqj.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103162/PROJECTS/Store/Videos/macs_vb9kps.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103129/PROJECTS/Store/Videos/iphone15_u9kkqj.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103162/PROJECTS/Store/Videos/macs_vb9kps.mp4" />
                </SwiperSlide>
                <SwiperSlide id="swiperNavigationProductMediaSlider">
                    <Item video="https://res.cloudinary.com/phase-1/video/upload/v1726103129/PROJECTS/Store/Videos/iphone15_u9kkqj.mp4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Videos;
