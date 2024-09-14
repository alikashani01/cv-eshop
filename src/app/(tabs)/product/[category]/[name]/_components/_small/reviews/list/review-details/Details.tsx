import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { Review } from "@/src/queries/review/Entities";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { createContext, useContext } from "react";
import { ProductContext } from "../../../../../_Context";
import Comment from "./Comment";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Props {
    reviewID: string;
    onClose: () => void;
}

export const Context = createContext({} as Review);

const ReviewDetails = ({ reviewID, onClose }: Props) => {
    const { _id } = useContext(ProductContext);
    const { data: reviews } = useFetchReviews(_id!);
    const review = reviews?.find((r) => r._id === reviewID);
    return (
        <Backdrop isOpen={reviewID ? true : false} onClose={onClose}>
            {!review ? null : (
                <Context.Provider value={review}>
                    <div className="md:hidden w-full max-h-[calc(100vh-95px)] pb-14 overflow-y-auto no-scrollbar">
                        <Header />
                        <Comment />
                        <Features />
                        <Footer onClose={onClose} />
                    </div>
                </Context.Provider>
            )}
        </Backdrop>
    );
};

export default ReviewDetails;
