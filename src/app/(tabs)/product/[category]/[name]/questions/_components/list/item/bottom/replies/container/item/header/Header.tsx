import CreatedAt from "./CreatedAt";
import Delete from "./Delete";
import User from "./User";

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                <Delete />
                <User />
            </div>
            <CreatedAt />
        </div>
    );
};

export default Header;
