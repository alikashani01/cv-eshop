import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { Review } from "@/src/queries/review/Entities";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { createContext, useContext } from "react";
import { ProductContext } from "../../../../../_Context";
import Comment from "./Comment";
import Features from "./features/Features";
import Header from "./header/Header";
import Sidebar from "./Sidebar";

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
                    <div className="hidden md:block w-[700px] h-[90vh]">
                        <Header onClose={onClose} />
                        <div className="h-[calc(100%-56px)] flex overflow-y-auto">
                            <Sidebar />
                            <div className="w-full py-6 pl-14">
                                <Comment />
                                <Features />
                            </div>
                        </div>
                    </div>
                </Context.Provider>
            )}
        </Backdrop>
    );
};

export default ReviewDetails;
