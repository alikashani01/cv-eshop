import { Review } from "@/src/queries/review/Entities";
import Item from "./item/Item";
import Loading from "./Loading";

interface Props {
    reviews?: Review[];
    isPending: boolean;
    openReviewDetails: (id: string) => void;
}

const Large = ({ reviews, isPending, openReviewDetails }: Props) => {
    return (
        <ul className="hidden lg:grid grid-cols-2 gap-6 pt-6">
            {isPending ? (
                <Loading />
            ) : (
                reviews?.map((review) => (
                    <Item
                        key={review._id}
                        review={review}
                        onOpenDetails={openReviewDetails}
                    />
                ))
            )}
        </ul>
    );
};

export default Large;
