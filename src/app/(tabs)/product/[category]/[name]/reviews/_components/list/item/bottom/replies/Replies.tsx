import { useContext, useState } from "react";
import Container from "./container/Container";
import { Context } from "../../Item";

const Replies = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    const { replies } = useContext(Context);
    return (
        <>
            {replies?.length === 0 ? (
                <p className="text-sm font-shabt text-neutral-500">بدون پاسخ</p>
            ) : (
                <button className="text-sm" onClick={handleOpen}>
                    پاسخ‌ها
                </button>
            )}

            <Container onClose={handleOpen} isOpen={isOpen} />
        </>
    );
};

export default Replies;
