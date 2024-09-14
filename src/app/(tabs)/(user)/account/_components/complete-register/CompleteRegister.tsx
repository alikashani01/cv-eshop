"use client";

import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import useEditName from "@/src/queries/user/profile/useEditName";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { FormEvent, useEffect, useState } from "react";
import Error from "./Error";
import Header from "./Header";
import Input from "./Input";
import Submit from "./Submit";

const CompleteRegister = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [fullName, setFullName] = useState("");
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setFullName(target.value);
    };

    const { data: user } = useFetchUserDetails();

    const editName = useEditName();
    const { isPending, error, isSuccess, reset, data } = editName;

    useEffect(() => {
        user && !user.fullName && setIsOpen(true);
    }, [user]);

    useEffect(() => {
        isSuccess && setIsOpen(false);
    }, [isSuccess]);
    return (
        <>
            <Backdrop isOpen={isOpen} onClose={() => {}}>
                <div></div>
                <form
                    className="md:w-[350px]"
                    onSubmit={(e) => {
                        e.preventDefault();
                        editName.mutate(fullName);
                    }}
                >
                    <Header />

                    <div className="p-4 pt-6">
                        <Input fullName={fullName} onChange={handleChange} />
                        <Error error={error?.message} />
                    </div>

                    <Submit fullName={fullName} isPending={isPending} />
                </form>
            </Backdrop>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={data || ""}
                reset={reset}
            />
        </>
    );
};

export default CompleteRegister;
