import useFetchQuestions from "@/src/queries/question/useFetchList";
import { Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductContext } from "../../../../_Context";
import Item from "./item/Item";
import QuestionDetails from "./question-details/Details";

const List = () => {
    const [questionID, setQuestionID] = useState("");
    const handleQuestionDetails = (id: string) => setQuestionID(id);
    const { _id } = useContext(ProductContext);
    const { data: questions, isPending } = useFetchQuestions(_id!);
    const limitedList = questions?.slice(0, 6);
    return (
        <>
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
                    limitedList?.map((question) => (
                        <SwiperSlide
                            key={question._id}
                            style={{ maxWidth: "400px" }}
                        >
                            <Item
                                question={question}
                                onOpenDetails={handleQuestionDetails}
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
            <QuestionDetails
                questionID={questionID}
                onClose={() => setQuestionID("")}
            />
        </>
    );
};

export default List;
