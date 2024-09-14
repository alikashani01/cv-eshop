import Image from "next/image";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../../_Context";
import "./styles.css";

const Photos = ({ selectedColor }: { selectedColor: string }) => {
    const { gallery } = useContext(ProductContext);
    return (
        <Swiper
            id="swiperNavigationProductPhotosLarge"
            slidesPerView={1}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={true}
            style={{ padding: "20px 0", height: "444px" }}
        >
            {gallery?.map((item) =>
                item.photos.map(
                    (photo, index) =>
                        item.color === selectedColor && (
                            <SwiperSlide
                                id="swiperNavigationProductPhotosLarge"
                                key={index}
                            >
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
