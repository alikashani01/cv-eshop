"use client";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface Props {
    open: boolean;
    onOpen: () => void;
}
const Search = ({ open, onOpen }: Props) => {
    const [keyword, setKeyword] = useState("");
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        const convertedValue = convertEngToPer(target.value) as string;
        setKeyword(convertedValue);
    };
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [query] = useDebounce(keyword, 200);
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set("query", query);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }, [query]);
    return (
        <div className="flex items-center absolute left-32">
            <button onClick={onOpen}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="#007fff"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
            <div
                className={`flex items-center justify-between transition-all duration-300
                ${open ? "w-8 opacity-1" : "opacity-0 w-0 overflow-hidden"}    
                `}
            >
                <input
                    className=" !w-[120px] mr-2 h-9 bg-white border border-neutral-100 px-4 text-neutral-600 placeholder:font-shabt"
                    placeholder="شناسه، محصول ..."
                    value={keyword}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Search;
