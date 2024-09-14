import { Review } from "@/src/queries/review/Entities";
import { createContext } from "react";
import Comment from "./Comment";
import Header from "./header/Header";
import Title from "./Title";
import Bottom from "./bottom/Bottom";

interface Props {
    onOpenDetails: (id: string) => void;
    review: Review;
}

export const Context = createContext({} as Review);

const Item = ({ onOpenDetails, review }: Props) => {
    return (
        <Context.Provider value={review}>
            <li className="w-full flex flex-col justify-between bg-second-theme rounded-2xl">
                <div
                    className="w-full"
                    onClick={() => onOpenDetails(review._id)}
                >
                    <Header />
                    <Title />
                    <Comment />
                </div>
                <Bottom />
            </li>
        </Context.Provider>
    );
};

export default Item;
