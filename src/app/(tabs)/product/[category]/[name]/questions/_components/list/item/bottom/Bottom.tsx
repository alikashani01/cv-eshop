import Dislike from "./Dislike";
import Like from "./Like";
import Reply from "./reply/Reply";

const Bottom = () => {
    return (
        <div className="h-10 flex items-center justify-between px-4 mb-0 border-t border-neutral-200">
            <div className="flex items-center gap-3">
                <p className="text-sm text-neutral-600">مفید بود؟</p>
                <Like />
                <Dislike />
            </div>

            <Reply />
        </div>
    );
};

export default Bottom;
