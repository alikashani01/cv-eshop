import { useState } from "react";
import Container from "./container/Container";
import ContextProvider from "./container/Context";
import Image from "next/image";

const NewReview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button className="gap-[6px] text-sm" onClick={handleOpen}>
                <Image
                    width={15}
                    height={15}
                    src="/icons/edit/blue.png"
                    alt=""
                />
                دیدگاه شما
            </button>
            <ContextProvider>
                <Container isOpen={isOpen} onClose={handleOpen} />
            </ContextProvider>
        </>
    );
};

export default NewReview;
