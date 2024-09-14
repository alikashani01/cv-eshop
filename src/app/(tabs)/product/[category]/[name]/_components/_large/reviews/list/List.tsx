import useFetchReviews from "@/src/queries/review/useFetchList";
import { useContext, useState } from "react";
import { ProductContext } from "../../../../_Context";
import Item from "./item/Item";
import ReviewDetails from "./review-details/Details";
import Loading from "./Loading";

const List = () => {
    const [reviewID, setReviewID] = useState("");
    const handleReviewDetails = (id: string) => setReviewID(id);
    const { _id } = useContext(ProductContext);
    const { data: reviews, isPending } = useFetchReviews(_id!);
    const limitedList = reviews?.slice(0, 6);
    return (
        <>
            <ul className="grid grid-cols-2 gap-6 pt-6">
                {isPending ? (
                    <Loading />
                ) : (
                    limitedList?.map((review) => (
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
