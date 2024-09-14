"use client";

import useSearchStore from "@/src/queries/product/search/history/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    createContext,
    FormEvent,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";
import { useDebounce } from "use-debounce";

type IContext = {
    keyword: string;
    setKeyword: (value: string) => void;
    onChange: (event: FormEvent) => void;
    query: string;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [keyword, setKeyword] = useState("");
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setKeyword(target.value);
    };
    const searchParams = useSearchParams();
    const lastQuery = searchParams.get("query");
    const pathname = usePathname();
    const { replace } = useRouter();
    const [query] = useDebounce(keyword, 750);
    const setSearchHistory = useSearchStore((s) => s.setSearchHistory);
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set("query", query);
            setSearchHistory(query);
        } else if (lastQuery) {
            setKeyword(lastQuery);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, [query]);
    const contextValues = {
        keyword,
        setKeyword,
        onChange: handleChange,
        query,
    };
    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
