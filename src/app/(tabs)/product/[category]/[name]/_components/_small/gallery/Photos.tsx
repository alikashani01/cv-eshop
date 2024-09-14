import Image from "next/image";
import { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../_Context";

const Photos = ({ selectedColor }: { selectedColor: string }) => {
    const { gallery } = useContext(ProductContext);
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            style={{ padding: "20px 0", height: "250px" }}
        >
            {gallery?.map((item) =>
                item.photos.map(
                    (photo, index) =>
                        item.color === selectedColor && (
                            <SwiperSlide key={index}>
                                <Image
                                    width={2000}
                                    height={2000}
                                    src={photo}
                                    alt=""
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </SwiperSlide>
                        )
                )
            )}
        </Swiper>
    );
};

export default Photos;
