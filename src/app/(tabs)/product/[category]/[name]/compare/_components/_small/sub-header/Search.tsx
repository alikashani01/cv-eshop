import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface Props {
    open: boolean;
    onClose: () => void;
}

const Search = ({ open, onClose }: Props) => {
    const [keyword, setKeyword] = useState("");
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        const convertedValue = convertEngToPer(target.value) as string;
        setKeyword(convertedValue);
    };
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [query] = useDebounce(keyword, 500);
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
        <div
            className={`flex items-center justify-between absolute top-0 left-0 w-full transition-all duration-500 p-1
            ${open ? "opacity-1 visible h-12" : "opacity-0 invisible h-0"}
            `}
        >
            <Image
                width={22}
                height={22}
                src="/icons/nav/search.png"
                alt=""
                className="absolute top-1/2 -translate-y-1/2 right-4"
            />
            <input
                className="w-full h-full bg-neutral-800 px-4 pr-12 text-neutral-200 placeholder:font-shabt"
                placeholder="نام محصول ..."
                value={keyword}
                onChange={handleChange}
            />
            <button
                className="absolute top-1/2 -translate-y-1/2 left-2 mx-2 mr-3 text-sm"
                onClick={onClose}
            >
                لغو
            </button>
        </div>
    );
};

export default Search;
