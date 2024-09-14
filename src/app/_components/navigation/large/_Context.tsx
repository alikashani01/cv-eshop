"use client";
import { createContext, PropsWithChildren, useState } from "react";

type IContext = {
    searchOpen: boolean;
    setSearchOpen: (value: boolean) => void;
    onOpenSearch: () => void;
    accountOpen: boolean;
    setAccountOpen: (value: boolean) => void;
    onOpenAccount: () => void;
    bagOpen: boolean;
    setBagOpen: (value: boolean) => void;
    onOpenBag: () => void;
    categoryOpen: string;
    setCategoryOpen: (value: string) => void;
    onOpenCategory: (value: string) => void;
};

export const NavContext = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [bagOpen, setBagOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState("");
    const handleOpenSearch = () => {
        setSearchOpen(!searchOpen);
        setBagOpen(false);
        setAccountOpen(false);
        setCategoryOpen("");
    };
    const handleOpenAccount = () => {
        setAccountOpen(!accountOpen);
        setSearchOpen(false);
        setBagOpen(false);
        setCategoryOpen("");
    };
    const handleOpenBag = () => {
        setBagOpen(!bagOpen);
        setAccountOpen(false);
        setSearchOpen(false);
        setCategoryOpen("");
    };
    const handleOpenCategory = (value: string) => {
        setCategoryOpen(value);
        setBagOpen(false);
        setAccountOpen(false);
        setSearchOpen(false);
    };
    const contextValues = {
        searchOpen,
        setSearchOpen,
        onOpenSearch: handleOpenSearch,
        accountOpen,
        setAccountOpen,
        onOpenAccount: handleOpenAccount,
        bagOpen,
        setBagOpen,
        onOpenBag: handleOpenBag,
        categoryOpen,
        setCategoryOpen,
        onOpenCategory: handleOpenCategory,
    };
    return (
        <NavContext.Provider value={contextValues}>
            {children}
        </NavContext.Provider>
    );
};

export default ContextProvider;
