"use client";
import { useState } from "react";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    return (
        <div className="h-14 flex items-center justify-between p-4 pl-6 border-b border-neutral-100">
            {toggle ? (
                <ToggleOn onToggle={handleToggle} />
            ) : (
                <ToggleOff onToggle={handleToggle} />
            )}
        </div>
    );
};

export default Header;
