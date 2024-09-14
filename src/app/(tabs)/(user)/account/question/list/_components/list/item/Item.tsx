import { Question } from "@/src/queries/question/Entities";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { createContext } from "react";
import Content from "./Content";
import Footer from "./footer/Footer";
import Header from "./Header";

interface Props {
    question: Question;
    setQuestionId: (value: string) => void;
}

export const Context = createContext({} as Question);

const Item = ({ setQuestionId, question }: Props) => {
    const mediaQuery = useMediaQuery("(min-width:1024px)");
    return (
        <Context.Provider value={question}>
            <li
                key={question._id}
                className="w-full flex flex-col bg-second-theme lg:bg-white rounded-2xl"
            >
                <Link
                    className="block flex-grow"
                    href={mediaQuery ? "" : `${question._id}`}
                    onClick={
                        mediaQuery
                            ? () => setQuestionId(question._id)
                            : () => {}
                    }
                >
                    <Header />
                    <Content content={question.content!} />
                </Link>

                <Footer />
            </li>
        </Context.Provider>
    );
};

export default Item;
