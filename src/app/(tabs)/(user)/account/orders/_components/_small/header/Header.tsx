"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const Sort = dynamic(() => import("../../sort/Sort"), { ssr: false });
const Search = dynamic(() => import("./Search"), { ssr: false });

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const handleOpen = () => setSearchOpen(!searchOpen);
    return (
        <header className="w-full h-12 fixed top-0 left-0 z-40">
            <div
                className={`h-12 flex items-center justify-between bg-[#f5f5f555] backdrop-blur-xl border-b border-[#f5f5f5aa] p-4
                    ${
                        searchOpen ? "-translate-y-[100%]" : ""
                    } transition-all duration-500
                `}
            >
                <p className="text-neutral-600">سفارش‌ها</p>
                <div className="flex items-center gap-4">
                    <button onClick={handleOpen} className=" justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                    <Sort />
                </div>
            </div>
            <Search open={searchOpen} onClose={handleOpen} />
        </header>
    );
};

export default Header;
