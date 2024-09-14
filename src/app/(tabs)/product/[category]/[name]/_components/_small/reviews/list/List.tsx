import useFetchReviews from "@/src/queries/review/useFetchList";
import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../../_Context";
import Item from "./item/Item";
import ReviewDetails from "./review-details/Details";
import { Skeleton } from "@mui/material";

const List = () => {
    const [reviewID, setReviewID] = useState("");
    const handleReviewDetails = (id: string) => setReviewID(id);
    const { _id } = useContext(ProductContext);
    const { data: reviews, isPending } = useFetchReviews(_id!);
    const limitedList = reviews?.slice(0, 6);
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                style={{
                    padding: "10px 20px 35px 20px",
                }}
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
                    limitedList?.map((review) => (
                        <SwiperSlide
                            key={review._id}
                            style={{ maxWidth: "400px" }}
                        >
                            <Item
                                review={review}
                                onOpenDetails={handleReviewDetails}
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
            <ReviewDetails
                reviewID={reviewID}
                onClose={() => setReviewID("")}
            />
        </>
    );
};

export default List;
