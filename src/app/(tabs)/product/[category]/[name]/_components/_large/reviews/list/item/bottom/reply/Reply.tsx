import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import { useState } from "react";
import Container from "./Container";

const Reply = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return (
        <>
            <button onClick={handleOpen}>
                <ReplyRoundedIcon
                    sx={{ fontSize: "1.6rem", color: "#007fff" }}
                />
            </button>
            <Container isOpen={isOpen} onClose={handleOpen} />
        </>
    );
};

export default Reply;
