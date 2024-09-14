import { Review } from "@/src/queries/review/Entities";
import useFetchUserReviews from "@/src/queries/review/useFetchUserList";
import { createContext } from "react";
import Header from "./Header";
import Info from "./info/Info";

export const Context = createContext({} as Review);

interface Props {
    reviewID: string;
    onClose: () => void;
}

const Container = ({ onClose, reviewID }: Props) => {
    const { data: reviews } = useFetchUserReviews();
    const review = reviews?.find((r) => r._id === reviewID);
    if (!review) return null;
    return (
        <div className="hidden lg:block w-[700px] bg-white h-[80vh] overflow-y-auto no-scrollbar rounded-xl">
            <Context.Provider value={review}>
                <Header onClose={onClose} />
                <Info />
            </Context.Provider>
        </div>
    );
};

export default Container;
