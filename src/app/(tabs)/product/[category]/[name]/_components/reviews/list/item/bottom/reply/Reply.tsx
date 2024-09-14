import SigninRequired from "@/src/app/_components/signin-required/SigninRequired";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import { useState } from "react";
import Container from "./Container";

const Reply = () => {
    const [isSigninReuqired, setIsSigninReuqired] = useState(false);
    const handleSigninRequired = () => setIsSigninReuqired(!isSigninReuqired);

    const { data: user } = useFetchUserDetails();

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        if (!user) return handleSigninRequired();
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button onClick={handleOpen}>
                <ReplyRoundedIcon
                    sx={{ fontSize: "1.6rem", color: "#007fff" }}
                />
            </button>

            <SigninRequired
                isOpen={isSigninReuqired}
                onClose={handleSigninRequired}
            />

            <Container isOpen={isOpen} onClose={handleOpen} />
        </>
    );
};

export default Reply;
