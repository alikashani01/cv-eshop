import { Question } from "@/src/queries/question/Entities";
import useFetchUserQuestions from "@/src/queries/question/useFetchUserList";
import { createContext } from "react";
import Header from "./Header";
import Info from "./info/Info";

export const Context = createContext({} as Question);

interface Props {
    questionID: string;
    onClose: () => void;
}

const Container = ({ onClose, questionID }: Props) => {
    const { data: questions } = useFetchUserQuestions();
    const question = questions?.find((r) => r._id === questionID);
    if (!question) return null;
    return (
        <div className="hidden lg:block w-[700px] bg-white h-[80vh] overflow-y-auto no-scrollbar rounded-xl">
            <Context.Provider value={question}>
                <Header onClose={onClose} />
                <Info />
            </Context.Provider>
        </div>
    );
};

export default Container;
