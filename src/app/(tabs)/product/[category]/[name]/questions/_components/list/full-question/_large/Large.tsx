import Comment from "../Content";
import Header from "../header/Header";
import Replies from "../replies/Replies";
import Sidebar from "./Sidebar";

const Large = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="hidden md:block w-[700px] h-[90vh]">
            <Header onClose={onClose} />
            <div className="h-[calc(100%-56px)] flex overflow-y-auto">
                <Sidebar />
                <div className="w-full py-6 pl-14">
                    <Comment />
                    <Replies />
                </div>
            </div>
        </div>
    );
};

export default Large;
