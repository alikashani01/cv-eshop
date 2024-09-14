import LeftSide from "./left-side/LeftSide";
import RightSide from "./right-side/RightSide";

const Top = () => {
    return (
        <div className="h-[70px] sticky top-0 z-20 flex items-center justify-between bg-[#ffffff55] backdrop-blur-xl px-[5%] lg:px-[8%]">
            <RightSide />
            <LeftSide />
        </div>
    );
};

export default Top;
