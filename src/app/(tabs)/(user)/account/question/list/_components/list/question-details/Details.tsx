import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import Container from "./container/Container";

interface Props {
    questionID: string;
    onClose: () => void;
}

const QuestionDetails = ({ questionID, onClose }: Props) => {
    return (
        <Backdrop isOpen={questionID ? true : false} onClose={onClose}>
            <Container onClose={onClose} questionID={questionID} />
        </Backdrop>
    );
};

export default QuestionDetails;
