"use client";
import useEditMobile from "@/src/queries/user/profile/mobile/useEdit";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { convertEngToPerDigits } from "@/src/utils/convertNumberTypes";
import { UseMutationResult } from "@tanstack/react-query";
import {
    createContext,
    FormEvent,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";

type IContext = {
    isSent: boolean;
    onSent: () => void;
    mobile: string;
    onChangeMobile: (event: FormEvent) => void;
    addMobile: UseMutationResult<string, Error, string, unknown>;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [isSent, setIsSent] = useState(false);
    const handleSent = () => setIsSent(!isSent);

    const [mobile, setMobile] = useState("");
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        const convertedToFarsi = convertEngToPerDigits(target.value);
        setMobile(convertedToFarsi);
    };

    const { data: user } = useFetchUserDetails();

    useEffect(() => {
        if (user) {
            setMobile(convertEngToPerDigits(user.mobile));
        }
    }, [user]);

    const addMobile = useEditMobile();

    useEffect(() => {
        addMobile.isSuccess ? setIsSent(true) : setIsSent(false);
    }, [addMobile.isSuccess]);

    const contextValues = {
        isSent,
        onSent: handleSent,
        mobile,
        onChangeMobile: handleChange,
        addMobile,
    };
    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
