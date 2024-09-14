"use client";

import { useState } from "react";
import Container from "./Container";
import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";

const Filters = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <button onClick={handleOpen} className="gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#007aff"
                    className="bi bi-sliders"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                    />
                </svg>

                <p className="text-[.9rem] pt-[1px] text-[#007aff]">فیلترها</p>
            </button>
            <Backdrop isOpen={open} onClose={handleOpen}>
                <Container onClose={handleOpen} />
            </Backdrop>
        </>
    );
};

export default Filters;
