"use client";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Context } from "../_Context";

const Form = () => {
    const { keyword, setKeyword } = useContext(Context);
    const { replace } = useRouter();
    const pathname = usePathname();
    return (
        <form className="fixed bottom-12 left-0 z-10 w-full flex items-center p-2">
            <label hidden htmlFor="keyword">
                نام، برند، محصول...
            </label>
            <input
                className="h-12 pl-14 w-full bg-second-theme rounded-2xl px-6 placeholder:text-[.9rem] placeholder:text-neutral-400 placeholder:font-shabt backdrop-blur-lg shadow-sm shadow-[#aaa5]"
                id="keyword"
                type="text"
                name="keyword"
                placeholder="جستجوی محصولات ..."
                value={keyword}
                onChange={(e) => {
                    if (e.target.value === "") {
                        replace(`${pathname}`);
                    }
                    setKeyword(e.target.value);
                }}
            />
            {keyword && (
                <button
                    className="absolute left-6 bg-white p-[2px] rounded-full"
                    onClick={() => {
                        setKeyword("");
                        replace(`${pathname}`);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#aaa"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            )}
        </form>
    );
};

export default Form;
