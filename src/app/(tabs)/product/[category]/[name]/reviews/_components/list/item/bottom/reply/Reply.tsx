import SigninRequired from "@/src/app/_components/signin-required/SigninRequired";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import { useState } from "react";
import Container from "./Container";

const Reply = () => {
    const { data: user } = useFetchUserDetails();

    const [isOpen, setIsOpen] = useState(false);

    const [isLoginReuqired, setIsLoginReuqired] = useState(false);

    const handleOpenLogin = () => setIsLoginReuqired(!isLoginReuqired);

    const handleOpen = () => (user ? setIsOpen(!isOpen) : handleOpenLogin());

    return (
        <>
            <button onClick={handleOpen}>
                <ReplyRoundedIcon
                    sx={{ fontSize: "1.6rem", color: "#007fff" }}
                />
            </button>
            <SigninRequired
                isOpen={isLoginReuqired}
                onClose={handleOpenLogin}
            />
            <Container isOpen={isOpen} onClose={handleOpen} />
        </>
    );
};

export default Reply;
