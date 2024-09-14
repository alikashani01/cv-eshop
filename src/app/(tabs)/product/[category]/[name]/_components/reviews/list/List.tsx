import useFetchReviews from "@/src/queries/review/useFetchList";
import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { ProductContext } from "../../../_Context";
import Large from "./_Large";
import Small from "./_Small";
import ReviewDetails from "./full-review/FullReview";

const List = () => {
    const [reviewID, setReviewID] = useState("");

    const openReviewDetails = (id: string) => setReviewID(id);

    const { _id } = useContext(ProductContext);

    const { data: reviews, isPending } = useFetchReviews(_id!);

    const limitedList = reviews?.slice(0, 6);

    return (
        <>
            <Large
                reviews={limitedList}
                isPending={isPending}
                openReviewDetails={openReviewDetails}
            />
            <Small
                reviews={limitedList}
                isPending={isPending}
                openReviewDetails={openReviewDetails}
            />
            <ReviewDetails
                reviewID={reviewID}
                onClose={() => setReviewID("")}
            />
        </>
    );
};

export default List;
