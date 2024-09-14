"use client";
import { useState } from "react";
import Sort from "../../sort/Sort";
import Search from "./Search";
import Statuses from "../../Statuses";

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const handleOpen = () => setSearchOpen(!searchOpen);
    return (
        <>
            <p className="text-neutral-600 text-lg">سفارش‌ها</p>
            <Statuses />
            <div className="gap-4 justify-end">
                <Search open={searchOpen} onOpen={handleOpen} />
                {!searchOpen && <Sort />}
            </div>
        </>
    );
};

export default Header;
