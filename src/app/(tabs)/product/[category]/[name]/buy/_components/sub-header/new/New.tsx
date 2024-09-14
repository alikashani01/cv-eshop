"use client";
import { useState } from "react";
import Container from "./container/Container";
import ContextProvider from "./container/Context";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import SigninRequired from "@/src/app/_components/signin-required/SigninRequired";

const New = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    const [isLoginReuqired, setIsLoginReuqired] = useState(false);
    const handleOpenLogin = () => setIsLoginReuqired(!isLoginReuqired);
    const { data: user } = useFetchUserDetails();
    return (
        <>
            <button
                className="gap-[6px] text-[.95rem]"
                onClick={() => (user ? handleOpen() : handleOpenLogin())}
            >
                پرسش جدید
            </button>
            <SigninRequired
                isOpen={isLoginReuqired}
                onClose={handleOpenLogin}
            />
            <ContextProvider>
                <Container isOpen={isOpen} onClose={handleOpen} />
            </ContextProvider>
        </>
    );
};

export default New;
