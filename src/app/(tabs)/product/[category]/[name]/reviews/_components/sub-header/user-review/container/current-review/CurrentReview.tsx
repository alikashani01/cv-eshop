import Comment from "./Comment";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import RatingContainer from "./Rating";
import Title from "./Title";

const CurrentReview = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="w-full md:w-[550px] lg:w-[700px] h-[calc(100vh-95px)] overflow-y-auto no-scrollbar">
            <Header onClose={onClose} />
            <div className="flex flex-col gap-6 p-6 pb-16 md:px-12">
                <RatingContainer />
                <Title />
                <Comment />
                <Features />
            </div>
            <Footer onClose={onClose} />
        </div>
    );
};

export default CurrentReview;
