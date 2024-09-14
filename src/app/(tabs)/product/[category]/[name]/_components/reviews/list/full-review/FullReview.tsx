import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { Review } from "@/src/queries/review/Entities";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { createContext, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Comment from "./Comment";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./Sidebar";

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
                    <div className="w-full md:w-[700px] max-h-[calc(100vh-95px)] pb-14 md:p-0 overflow-y-auto no-scrollbar">
                        <Header onClose={onClose} />
                        <div className="h-[calc(100%-56px)] flex overflow-y-auto pb-10">
                            <Sidebar />
                            <div className="w-full px-6 md:pr-0 md:pl-14 py-6">
                                <Comment />
                                <Features />
                            </div>
                        </div>
                        <Footer onClose={onClose} />
                    </div>
                </Context.Provider>
            )}
        </Backdrop>
    );
};

export default FullReview;
