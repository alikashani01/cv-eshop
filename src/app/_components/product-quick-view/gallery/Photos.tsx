import Image from "next/image";
import { useContext } from "react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../ProductQuickView";
import "./styles.css";

const Photos = ({ selectedColor }: { selectedColor: string }) => {
    const { gallery } = useContext(Context);
    return (
        <Swiper
            id="swiperNavigationProductQuickViewPhotos"
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
            style={{
                width: "100%",
                height: "200px",
                padding: "10px 0",
            }}
        >
            {gallery.map(
                (item) =>
                    item.color === selectedColor &&
                    item.photos.map((photo, index) => (
                        <SwiperSlide
                            id="swiperNavigationProductQuickViewPhotosSlider"
                            key={index}
                            style={{
                                height: "100%",
                            }}
                        >
                            <Image
                                width={1000}
                                height={1000}
                                src={photo || ""}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </SwiperSlide>
                    ))
            )}
        </Swiper>
    );
};

export default Photos;
