import { Question } from "@/src/queries/question/Entities";
import { Skeleton, useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./item/Item";

interface Props {
    questions?: Question[];
    isPending: boolean;
    openQuestionDetails: (id: string) => void;
}

const Small = ({ questions, isPending, openQuestionDetails }: Props) => {
    const mediaQuery = useMediaQuery("(min-width:1024px)");
    return (
        !mediaQuery && (
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
                    questions?.map((question) => (
                        <SwiperSlide
                            key={question._id}
                            style={{ maxWidth: "400px" }}
                        >
                            <Item
                                question={question}
                                onOpenDetails={openQuestionDetails}
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        )
    );
};

export default Small;
