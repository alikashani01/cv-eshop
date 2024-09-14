import New from "./new/New";

const SubHeader = () => {
    return (
        <div className="sticky w-full top-0 left-0 z-10 h-12 md:h-16 border-y border-neutral-100 flex items-center justify-between bg-[#ffffff55] backdrop-blur-lg px-4 md:px-[5%] lg:px-[8%]">
            <p className="lg:text-xl text-neutral-600">پرسش‌ها</p>
            <New />
        </div>
    );
};

export default SubHeader;
