import { Review } from "@/src/queries/review/Entities";
import { Skeleton } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./item/Item";

interface Props {
    reviews?: Review[];
    isPending: boolean;
    openReviewDetails: (id: string) => void;
}

const Small = ({ reviews, isPending, openReviewDetails }: Props) => {
    return (
        <div className="lg:hidden">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                style={{ padding: "10px 20px 35px 20px" }}
            >
                {isPending ? (
                    <SwiperSlide style={{ maxWidth: "400px" }}>
                        <Skeleton
                            width="100%"
                            height="200px"
                            variant="rounded"
                            animation="wave"
                            className="!bg-second-theme !rounded-2xl"
                        />
                    </SwiperSlide>
                ) : (
                    reviews?.map((review) => (
                        <SwiperSlide
                            key={review._id}
                            style={{ maxWidth: "400px" }}
                        >
                            <Item
                                review={review}
                                onOpenDetails={openReviewDetails}
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
};

export default Small;
