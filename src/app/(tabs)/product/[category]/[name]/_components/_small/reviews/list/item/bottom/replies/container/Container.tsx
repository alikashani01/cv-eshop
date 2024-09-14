import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import Header from "./Header";
import List from "./List";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    return (
        <Backdrop isOpen={isOpen} onClose={onClose}>
            <div className="w-full max-h-[calc(100vh-95px)] overflow-y-auto bg-second-theme rounded-t-2xl">
                <Header onClose={onClose} />
                <List />
            </div>
        </Backdrop>
    );
};

export default Container;
