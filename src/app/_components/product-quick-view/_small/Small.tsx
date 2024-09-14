import Backdrop from "../../_modules/backdrop/Backdrop";
import Body from "../Body";
import Footer from "../Footer";

interface Props {
    open: boolean;
    handleOpen: () => void;
}

function Small({ open, handleOpen }: Props) {
    return (
        <Backdrop isOpen={open} onClose={handleOpen}>
            <div className="md:hidden w-dvw h-[calc(100vh-95px)] bg-[#f5f5f7]">
                <Body />
                <Footer handleOpen={handleOpen} />
            </div>
        </Backdrop>
    );
}

export default Small;
