"use client";

import Actions from "./actions/Actions";
import Menu from "./menu/Menu";
import Profile from "./profile/Profile";

const Sidebar = () => {
    return (
        <aside className="hidden lg:block min-w-[250px] lg:min-w-[300px] h-[calc(100vh-64px)] rounded-2xl overflow-y-auto no-scrollbar bg-second-theme">
            <Profile />
            <Menu />
            <Actions />
        </aside>
    );
};

export default Sidebar;
