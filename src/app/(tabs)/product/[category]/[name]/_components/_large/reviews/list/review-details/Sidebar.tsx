import DisLike from "./Dislike";
import Like from "./Like";

const Sidebar = () => {
    return (
        <aside className="sticky top-0 min-w-14 max-w-14 flex flex-col items-center pt-6">
            <Like />
            <DisLike />
        </aside>
    );
};

export default Sidebar;
