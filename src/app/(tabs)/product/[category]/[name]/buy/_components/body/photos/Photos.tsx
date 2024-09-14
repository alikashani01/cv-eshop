"use client";
import Image from "next/image";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../../_Context";
import { Context } from "../../../_Context";
import "./styles.css";

const Photos = () => {
    const { data } = useContext(Context);
    const { gallery } = useContext(ProductContext);
    return (
        <div className="lg:sticky top-0 lg:max-w-[60%] h-[250px] lg:h-full lg:flex-[2] bg-second-theme rounded-2xl">
            <Swiper
                id="swiperBuyPhotos"
                slidesPerView={1}
                spaceBetween={50}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation={true}
            >
                {gallery?.map((item) =>
                    item.photos.map(
                        (photo, index) =>
                            item.color === data?.color.fa && (
                                <SwiperSlide
                                    id="swiperBuyPhotosSlider"
                                    key={index}
                                >
                                    <Image
                                        width={2000}
                                        height={2000}
                                        src={photo}
                                        alt=""
                                        className="w-full h-full lg:px-10 object-contain"
                                    />
                                </SwiperSlide>
                            )
                    )
                )}
            </Swiper>
        </div>
    );
};

export default Photos;
