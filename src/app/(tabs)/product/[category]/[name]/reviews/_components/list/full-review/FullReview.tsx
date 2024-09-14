import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { Review } from "@/src/queries/review/Entities";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { createContext, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Large from "./_large/Large";
import Small from "./_small/Small";

interface Props {
    reviewID: string;
    onClose: () => void;
}

export const Context = createContext({} as Review);

const FullReview = ({ reviewID, onClose }: Props) => {
    const { _id } = useContext(ProductContext);
    const { data: reviews } = useFetchReviews(_id!);
    const review = reviews?.find((r) => r._id === reviewID);
    return (
        <Backdrop isOpen={reviewID ? true : false} onClose={onClose}>
            {!review ? null : (
                <Context.Provider value={review}>
                    <>
                        <Small onClose={onClose} />
                        <Large onClose={onClose} />
                    </>
                </Context.Provider>
            )}
        </Backdrop>
    );
};

export default FullReview;
