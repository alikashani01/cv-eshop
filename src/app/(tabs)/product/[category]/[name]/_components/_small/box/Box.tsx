import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../_Context";
import Item from "./Item";

const Box = () => {
    const { box } = useContext(ProductContext);
    return (
        box?.length! > 0 && (
            <div
            //  className="h-[280px]"
            >
                <p className="h-12 flex items-center justify-center p-3 text-neutral-600">
                    محتوای جعبه
                </p>
                <Swiper slidesPerView={1} spaceBetween={10}>
                    {box?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Item item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    );
};

export default Box;
