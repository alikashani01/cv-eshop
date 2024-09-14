import Image from "next/image";
import { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "./Item";

const Products = () => {
    const { items } = useContext(Context);
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            className="h-[85px]"
            style={{ padding: "0px" }}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className="!w-auto p-2">
                    <Image
                        width={500}
                        height={500}
                        src={item.photo}
                        alt=""
                        className="w-20 h-full object-contain"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Products;
