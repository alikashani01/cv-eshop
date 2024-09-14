"use client";
import Spinner from "@/src/app/_components/_modules/spinner/Spinner";
import useLogout from "@/src/queries/user/useLogout";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useEffect } from "react";

const Error = () => {
    const { error } = useFetchUserDetails();
    const { mutate: logout, isPending } = useLogout();
    useEffect(() => {
        if (error?.message.includes("کاربری پیدا نشد!")) {
            logout();
        }
    }, [error]);

    return (
        <div>
            <p>Error</p>
            {error?.message}
        </div>
    );
};

export default Error;
