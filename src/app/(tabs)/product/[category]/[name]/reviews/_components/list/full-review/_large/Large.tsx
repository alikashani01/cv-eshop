import Comment from "../Comment";
import Features from "../features/Features";
import Header from "../header/Header";
import Sidebar from "./Sidebar";

const Large = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="hidden md:block w-[700px] h-[90vh]">
            <Header onClose={onClose} />
            <div className="h-[calc(100%-56px)] flex overflow-y-auto">
                <Sidebar />
                <div className="w-full py-6 pl-14">
                    <Comment />
                    <Features />
                </div>
            </div>
        </div>
    );
};

export default Large;
