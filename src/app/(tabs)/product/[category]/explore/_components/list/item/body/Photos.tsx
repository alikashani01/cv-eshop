import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../Item";
import "./styles.css";

const Photos = () => {
    const { gallery, title } = useContext(Context);
    const href = title!.fa.split(" ").join("-");
    const photos = gallery[0].photos;
    return (
        <Swiper
            id="swiperProductCardPhotos"
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
        >
            {photos?.map((photo, index) => (
                <SwiperSlide id="swiperProductCardPhotosSlider" key={index}>
                    <Link href={href} className="w-full h-full">
                        <Image
                            width={1000}
                            height={1000}
                            src={photo}
                            alt=""
                            className="min-w-[100%] max-width-[100%] h-full object-contain p-2"
                        />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Photos;
