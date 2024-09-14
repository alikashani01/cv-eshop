import { Review } from "@/src/queries/review/Entities";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { createContext } from "react";
import Comment from "./Comment";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Title from "./Title";

interface Props {
    review: Review;
    setReviewId: (value: string) => void;
}

export const Context = createContext({} as Review);

const Item = ({ setReviewId, review }: Props) => {
    const mediaQuery = useMediaQuery("(min-width:1024px)");
    return (
        review.comment && (
            <Context.Provider value={review}>
                <li
                    key={review._id}
                    className="w-full flex flex-col bg-second-theme lg:bg-white rounded-2xl"
                >
                    <Link
                        className="block flex-grow"
                        href={mediaQuery ? "" : `${review._id}`}
                        onClick={
                            mediaQuery
                                ? () => setReviewId(review._id)
                                : () => {}
                        }
                    >
                        <Header />
                        <Title />
                        <Comment comment={review.comment!} />
                    </Link>

                    <Footer />
                </li>
            </Context.Provider>
        )
    );
};

export default Item;
