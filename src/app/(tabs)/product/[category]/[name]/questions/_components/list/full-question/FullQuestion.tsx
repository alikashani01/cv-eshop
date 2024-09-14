import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import { Question } from "@/src/queries/question/Entities";
import useFetchQuestions from "@/src/queries/question/useFetchList";
import { createContext, useContext } from "react";
import { ProductContext } from "../../../../_Context";
import Large from "./_large/Large";
import Small from "./_small/Small";

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
                    <>
                        <Small onClose={onClose} />
                        <Large onClose={onClose} />
                    </>
                </Context.Provider>
            )}
        </Backdrop>
    );
};

export default FullQuestion;
