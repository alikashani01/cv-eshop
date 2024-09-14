import Content from "../Content";
import Header from "../header/Header";
import Replies from "../replies/Replies";
import Footer from "./footer/Footer";

const Small = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="md:hidden w-full max-h-[calc(100vh-95px)] pb-14 overflow-y-auto no-scrollbar">
            <Header />
            <Content />
            <Replies />
            <Footer onClose={onClose} />
        </div>
    );
};

export default Small;
