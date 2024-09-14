import Dislikes from "./Dislikes";
import Likes from "./Likes";

const Sidebar = () => {
    return (
        <aside className="min-w-16 max-w-16 h-full overflow-y-auto p-4 *:mb-4">
            <Likes />
            <Dislikes />
        </aside>
    );
};

export default Sidebar;
