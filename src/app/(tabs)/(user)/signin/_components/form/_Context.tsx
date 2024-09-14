"use client";
import { Login } from "@/src/queries/user/Entities";
import useAdd from "@/src/queries/user/login/useAdd";
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
    addMobile: UseMutationResult<string, Error, Login, unknown>;
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
    const addMobile = useAdd();
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
