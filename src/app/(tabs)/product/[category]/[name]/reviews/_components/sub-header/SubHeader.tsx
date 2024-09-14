import RatingContainer from "./Rating";
import UserReview from "./user-review/UserReview";

const SubHeader = () => {
    return (
        <div className="sticky w-full top-0 left-0 z-10 h-12 md:h-14 border-y border-neutral-100 flex items-center justify-between bg-[#ffffff55] backdrop-blur-lg px-4 md:px-[5%] lg:px-[8%]">
            <div className="flex items-center gap-3 justify-center">
                <p className="lg:text-xl text-neutral-600">دیدگاه‌ها</p>
                <RatingContainer />
            </div>
            <div className="justify-end">
                <UserReview />
            </div>
        </div>
    );
};

export default SubHeader;
