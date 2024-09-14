import { Question } from "@/src/queries/question/Entities";
import { createContext } from "react";
import Bottom from "./bottom/Bottom";
import Content from "./Content";
import Header from "./header/Header";
import Subject from "./Subject";

interface Props {
    onOpenDetails: (id: string) => void;
    question: Question;
}

export const Context = createContext({} as Question);

const Item = ({ onOpenDetails, question }: Props) => {
    return (
        <Context.Provider value={question}>
            <li className="w-full flex flex-col justify-between bg-second-theme rounded-2xl">
                <div
                    className="w-full"
                    onClick={() => onOpenDetails(question._id)}
                >
                    <Header />
                    <Subject />
                    <Content />
                </div>
                <Bottom />
            </li>
        </Context.Provider>
    );
};

export default Item;
