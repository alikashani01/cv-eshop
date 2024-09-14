import Date from "./Date";
import RatingContainer from "./Rating";
import User from "./User";

const Header = () => {
    return (
        <div className="h-12 flex items-center justify-between px-4">
            <div>
                <User />
                <Date />
            </div>
            <RatingContainer />
        </div>
    );
};

export default Header;
