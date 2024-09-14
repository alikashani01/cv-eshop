import Featured from "../../../_large/sidebar/featured/Featured";
import Filters from "../../../filters/Filters";

const Container = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="w-full h-[calc(100vh-80px)] overflow-y-auto pb-20 bg-white rounded-t-xl">
            <Featured />
            <Filters />
            <div className="fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-14 p-1 border-t border-neutral-100 bg-[#f5f5f555] backdrop-blur-sm">
                <button
                    className="bg-blue-600 text-white text-sm p-[6px] px-4 rounded-full"
                    onClick={onClose}
                >
                    انجام شد
                </button>
            </div>
        </div>
    );
};

export default Container;
