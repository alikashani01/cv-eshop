import FullListLink from "./FullListLink";
import NewReview from "./new-review/NewReview";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6 lg:px-2">
            <div className="">
                <p>دیدگاه‌ها</p>
                <FullListLink />
            </div>
            <NewReview />
        </div>
    );
};

export default Header;
