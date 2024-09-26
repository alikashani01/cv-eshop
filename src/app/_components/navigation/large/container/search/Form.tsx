import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { NavContext } from "../../_Context";
import { Context } from "./_Context";

export default function Form() {
    const { replace } = useRouter();
    const pathname = usePathname();
    const { keyword, setKeyword } = useContext(Context);
    const { searchOpen: open } = useContext(NavContext);
    return (
        <form
            className={`relative flex items-center transition-all duration-500 mt-4
            ${open ? "w-1/3" : "w-0 overflow-hidden"}
            `}
        >
            <label hidden htmlFor="search">
                جستجوی محصولات
            </label>
            <input
                type="text"
                id="search"
                className="h-12 w-full px-6 bg-neutral-200/80 backdrop-blur-sm shadow-sm shadow-[#aaaa] rounded-2xl"
                name="keyword"
                placeholder="نام، برند، ... محصول"
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
                    className="absolute left-4 bg-neutral-400/50 p-[2px] rounded-full"
                    onClick={() => {
                        setKeyword("");
                        replace(`${pathname}`);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            )}
        </form>
    );
}
