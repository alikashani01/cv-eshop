"use client";
import useSearchStore from "@/src/queries/product/search/history/store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../_Context";

const History = () => {
    const { keyword, setKeyword } = useContext(Context);
    const searchHistory = useSearchStore((s) => s.searchHistory);
    const setRemoveHistory = useSearchStore((s) => s.setRemoveHistory);
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleItem = (value: string) => {
        setKeyword(value);
        replace(`${pathname}?query=${value}`);
    };
    return (
        !keyword && (
            <ul className="flex flex-col px-4 pt-4">
                {searchHistory.map((item, index) => (
                    <li
                        key={index}
                        className="py-[10px] flex items-center gap-2 border-b border-neutral-100"
                    >
                        <button onClick={() => setRemoveHistory(item)}>
                            <Image
                                width={16}
                                height={16}
                                src="/icons/trash/red.png"
                                alt=""
                            />
                        </button>
                        <p
                            className="flex-grow font-shabt text-sm text-10 tracking-[1px]"
                            onClick={() => handleItem(item)}
                        >
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        )
    );
};

export default History;
