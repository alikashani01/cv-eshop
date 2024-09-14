import { useState } from "react";
import Container from "./container/Container";
import ContextProvider from "./container/Context";
import Image from "next/image";
import SigninRequired from "@/src/app/_components/signin-required/SigninRequired";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

const New = () => {
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

            <SigninRequired
                isOpen={isSigninReuqired}
                onClose={handleSigninRequired}
            />
        </>
    );
};

export default New;
