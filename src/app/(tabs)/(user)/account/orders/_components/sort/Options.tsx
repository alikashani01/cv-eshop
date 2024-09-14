import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Option = {
    label: string;
    value: string[];
};
const options: Option[] = [
    {
        label: "تاریخ",
        value: ["جدیدترین", "قدیمی‌ترین"],
    },
    {
        label: "هزینه",
        value: ["گران‌ترین", "قدیمی‌ترین"],
    },
    {
        label: "محصولات",
        value: ["بیشترین", "قدیمی‌ترین"],
    },
];

const Options = ({ onClose }: { onClose: () => void }) => {
    const { replace } = useRouter();
    const pathname = usePathname();

    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams);

    const sort = useSearchParams().get("sort") || "جدیدترین";

    const handleSort = (value: string) => {
        params.delete("sort");
        params.append("sort", value);
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <ul>
            <li onClick={onClose}>
                <button
                    className="w-full h-10 justify-between px-5 text-neutral-600 font-shabt text-sm border-b border-neutral-200"
                    onClick={() =>
                        handleSort(
                            sort === "جدیدترین" ? "قدیمی‌ترین" : "جدیدترین"
                        )
                    }
                >
                    تاریخ
                    {sort !== "جدیدترین" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#00d166"
                            className="bi bi-arrow-up-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#ff0030"
                            className="bi bi-arrow-down-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                            />
                        </svg>
                    )}
                </button>
            </li>
            <li onClick={onClose}>
                <button
                    className="w-full h-10 justify-between px-5 text-neutral-600 font-shabt text-sm border-b border-neutral-200"
                    onClick={() =>
                        handleSort(
                            sort === "گران‌ترین" ? "ارزان‌ترین" : "گران‌ترین"
                        )
                    }
                >
                    هزینه
                    {sort !== "گران‌ترین" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#00d166"
                            className="bi bi-arrow-up-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#ff0030"
                            className="bi bi-arrow-down-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                            />
                        </svg>
                    )}
                </button>
            </li>
            <li onClick={onClose}>
                <button
                    className="w-full h-10 justify-between px-5 text-neutral-600 font-shabt text-sm"
                    onClick={() =>
                        handleSort(sort === "بیشترین" ? "کمترین" : "بیشترین")
                    }
                >
                    تعداد محصولات
                    {sort !== "بیشترین" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#00d166"
                            className="bi bi-arrow-up-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="#ff0030"
                            className="bi bi-arrow-down-short"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                            />
                        </svg>
                    )}
                </button>
            </li>
        </ul>
    );
};

export default Options;
