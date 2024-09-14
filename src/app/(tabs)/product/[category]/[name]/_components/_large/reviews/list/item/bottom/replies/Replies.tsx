import { useState } from "react";
import Container from "./container/Container";

const Replies = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button className="text-sm" onClick={handleOpen}>
                پاسخ‌ها
            </button>
            <Container onClose={handleOpen} isOpen={isOpen} />
        </>
    );
};

export default Replies;
