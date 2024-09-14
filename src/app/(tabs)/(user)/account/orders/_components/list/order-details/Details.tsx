import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import Container from "./container/Container";

interface Props {
    orderID: string;
    onClose: () => void;
}

const OrderDetails = ({ orderID, onClose }: Props) => {
    return (
        <Backdrop isOpen={orderID ? true : false} onClose={onClose}>
            <Container onClose={onClose} orderID={orderID} />
        </Backdrop>
    );
};

export default OrderDetails;
