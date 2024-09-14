import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import Container from "./container/Container";

interface Props {
    reviewID: string;
    onClose: () => void;
}

const ReviewDetails = ({ reviewID, onClose }: Props) => {
    return (
        <Backdrop isOpen={reviewID ? true : false} onClose={onClose}>
            <Container onClose={onClose} reviewID={reviewID} />
        </Backdrop>
    );
};

export default ReviewDetails;
