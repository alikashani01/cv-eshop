"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SortLink = ({ option }: { option: string }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", option);
        const newUrl = `?${params.toString()}`;
        router.push(newUrl);
    };

    return (
        <button
            onClick={handleClick}
            className="text-[.9rem] text-neutral-300 font-shabt w-full p-[10px] px-4 pl-[.8rem]"
        >
            {option}
        </button>
    );
};

export default SortLink;
