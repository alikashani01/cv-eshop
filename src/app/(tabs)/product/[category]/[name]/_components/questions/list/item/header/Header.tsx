import Date from "./Date";
import User from "./User";

const Header = () => {
    return (
        <div className="h-12 flex items-center justify-between px-4">
            <User />
            <Date />
        </div>
    );
};

export default Header;
