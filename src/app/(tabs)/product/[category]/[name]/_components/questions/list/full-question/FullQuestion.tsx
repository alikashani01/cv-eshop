import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { Question } from "@/src/queries/question/Entities";
import useFetchQuestions from "@/src/queries/question/useFetchList";
import { createContext, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Content from "./Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Replies from "./replies/Replies";

interface Props {
    questionID: string;
    onClose: () => void;
}

export const Context = createContext({} as Question);

const FullQuestion = ({ questionID, onClose }: Props) => {
    const { _id } = useContext(ProductContext);
    const { data: questions } = useFetchQuestions(_id!);
    const question = questions?.find((r) => r._id === questionID);
    return (
        <Backdrop isOpen={questionID ? true : false} onClose={onClose}>
            {!question ? null : (
                <Context.Provider value={question}>
                    <div className="w-full max-h-[calc(100vh-95px)] md:w-[700px] overflow-y-auto no-scrollbar">
                        <Header onClose={onClose} />
                        <Content />
                        <Replies />
                        <Footer onClose={onClose} />
                    </div>
                </Context.Provider>
            )}
        </Backdrop>
    );
};

export default FullQuestion;
