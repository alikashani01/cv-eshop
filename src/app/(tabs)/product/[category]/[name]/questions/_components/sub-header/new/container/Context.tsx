import { createContext, FormEvent, PropsWithChildren, useState } from "react";

export type Data = {
    subject: string;
    content: string;
};

type Context = {
    data: Data;
    onChange: (e: FormEvent) => void;
};

export const Context = createContext({} as Context);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState({
        subject: "",
        content: "",
    });

    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    const contextValues = {
        data,
        onChange: handleChange,
    };

    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
