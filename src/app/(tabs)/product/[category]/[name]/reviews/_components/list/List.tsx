"use client";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { useContext, useState } from "react";
import { ProductContext } from "../../../_Context";
import Item from "./item/Item";
import Loading from "./Loading";
import ReviewDetails from "./full-review/FullReview";

const List = () => {
    const [reviewID, setReviewID] = useState("");
    const handleReviewDetails = (id: string) => setReviewID(id);
    const { _id } = useContext(ProductContext);
    const { data: reviews, isPending } = useFetchReviews(_id!);
    return (
        <>
            <ul className="w-full grid lg:grid-cols-2 gap-4 md:gap-6 py-4 md:py-6 px-4 lg:px-[8%]">
                {isPending ? (
                    <Loading />
                ) : (
                    reviews?.map((review) => (
                        <Item
                            key={review._id}
                            review={review}
                            onOpenDetails={handleReviewDetails}
                        />
                    ))
                )}
            </ul>
            <ReviewDetails
                reviewID={reviewID}
                onClose={() => setReviewID("")}
            />
        </>
    );
};

export default List;
