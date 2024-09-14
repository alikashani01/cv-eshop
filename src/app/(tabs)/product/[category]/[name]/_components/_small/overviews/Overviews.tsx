import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../_Context";
import Item from "./Item";

const Overviews = () => {
    const { overviews } = useContext(ProductContext);
    return (
        <div>
            <Swiper slidesPerView={1} spaceBetween={10}>
                {overviews?.map((overview, index) => (
                    <SwiperSlide key={index}>
                        <Item overview={overview} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Overviews;
