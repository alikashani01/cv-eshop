import Comment from "../Comment";
import Features from "../features/Features";
import Header from "../header/Header";
import Footer from "./footer/Footer";

const Small = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="md:hidden w-full max-h-[calc(100vh-95px)] pb-14 overflow-y-auto no-scrollbar">
            <Header />
            <Comment />
            <Features />
            <Footer onClose={onClose} />
        </div>
    );
};

export default Small;
