"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const Search = dynamic(() => import("./Search"), { ssr: false });

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const handleOpen = () => setSearchOpen(!searchOpen);
    return (
        <div className="w-full h-12">
            <div
                className={`h-12 flex items-center justify-between border-b border-neutral-200 p-4
                    ${
                        searchOpen
                            ? "opacity-0 invisible"
                            : "opacity-100 visible"
                    } transition-all duration-500
                `}
            >
                <p className="text-neutral-600">محصولات قابل مقایسه</p>
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
                </div>
            </div>
            <Search open={searchOpen} onClose={handleOpen} />
        </div>
    );
};

export default Header;
