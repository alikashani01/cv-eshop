"use client";

import { useState } from "react";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    return (
        <header className="fixed top-0 w-full z-10 h-12">
            {toggle ? (
                <ToggleOn onToggle={handleToggle} />
            ) : (
                <ToggleOff onToggle={handleToggle} />
            )}
        </header>
    );
};

export default Header;
