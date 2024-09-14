import FullListLink from "./FullListLink";
import NewReview from "./new/New";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6">
            <div className="">
                <p>پرسش‌ها</p>
                <FullListLink />
            </div>
            <NewReview />
        </div>
    );
};

export default Header;
