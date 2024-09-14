import { Product } from "@/src/queries/product/Entities";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./item/Item";
import "./styles.css";

const List = ({ products }: { products: Product[] }) => {
    return (
        <Swiper
            id="swiperRelatedProducts"
            slidesPerView={"auto"}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
        >
            {products?.map((product) => (
                <SwiperSlide id="swiperRelatedProductsSlider" key={product._id}>
                    <Item product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default List;
