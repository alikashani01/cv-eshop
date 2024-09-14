import BackdropLarge from "@/src/app/_components/_modules/backdrop/BackdropLarge";
import Header from "./Header";
import List from "./List";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    return (
        <BackdropLarge isOpen={isOpen} onClose={onClose}>
            <div className="w-[40vw] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-sm shadow-[#aaa8]">
                <Header onClose={onClose} />
                <List />
            </div>
        </BackdropLarge>
    );
};

export default Container;
