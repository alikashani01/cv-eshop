"use client";
import Empty from "@/src/app/_components/_modules/Empty";
import useFetchUserReviews from "@/src/queries/review/useFetchUserList";
import { useState } from "react";
import Item from "./item/Item";
import Loading from "./Loading";
import ReviewDetails from "./review-details/Details";

const List = () => {
    const { data: reviews, isPending } = useFetchUserReviews();
    const [reviewId, setReviewId] = useState("");
    return (
        <>
            <Empty
                message="دیدگاهی ثبت نکرده‌اید!"
                length={reviews?.length}
                padding="70px"
            />
            <ul className="p-4 py-16 lg:p-6 grid md:grid-cols-2 gap-4 lg:gap-6">
                {isPending ? (
                    <Loading />
                ) : (
                    reviews?.map((review) => (
                        <Item
                            key={review._id}
                            review={review}
                            setReviewId={(value: string) => setReviewId(value)}
                        />
                    ))
                )}
            </ul>
            <ReviewDetails
                reviewID={reviewId}
                onClose={() => setReviewId("")}
            />
        </>
    );
};

export default List;
