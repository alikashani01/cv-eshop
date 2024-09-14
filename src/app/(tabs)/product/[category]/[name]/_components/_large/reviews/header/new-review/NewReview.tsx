import { useState } from "react";
import Container from "./container/Container";
import ContextProvider from "./container/Context";

const NewReview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button
                className="gap-[6px] p-[10px] px-4 rounded-xl bg-blue-600 text-white text-[.95rem]"
                onClick={handleOpen}
            >
                {/* <Image
                    width={17}
                    height={17}
                    src="/icons/edit/blue.png"
                    alt=""
                /> */}
                دیدگاه شما
            </button>
            <ContextProvider>
                <Container isOpen={isOpen} onClose={handleOpen} />
            </ContextProvider>
        </>
    );
};

export default NewReview;
