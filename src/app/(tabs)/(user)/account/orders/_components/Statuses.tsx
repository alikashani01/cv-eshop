"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Statuses = () => {
    const pathname = usePathname();
    const router = useRouter();
    const status = useSearchParams().get("status") || "فعال";
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const handleStatus = (value: string) => {
        params.delete("status");
        params.append("status", value);
        router.push(`${pathname}?${params.toString()}`);
    };
    return (
        <div className="flex !flex-[3] max-w-[350px] mx-auto p-2 pb-0 lg:p-0">
            <ul className="relative w-full flex items-center justify-between gap-1 p-[6px] px-1 bg-second-theme lg:bg-white rounded-xl text-center *:w-1/4">
                <li>
                    <button
                        onClick={() => handleStatus("فعال")}
                        className="p-0 min-[360px]:px-2 py-[1px] w-full"
                    >
                        <p className="relative z-20 text-[.8rem] text-neutral-600">
                            فعال
                        </p>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleStatus("تحویل شده")}
                        className="p-0 min-[360px]:px-2 py-[1px] w-full"
                    >
                        <p className="relative z-20 text-[.8rem] text-neutral-600">
                            تحویل شده
                        </p>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleStatus("لغو شده")}
                        className="p-0 min-[360px]:px-2 py-[1px] w-full"
                    >
                        <p className="relative z-20 text-[.8rem] text-neutral-600">
                            لغو شده
                        </p>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleStatus("مرجوع شده")}
                        className="p-0 min-[360px]:px-2 py-[1px] w-full"
                    >
                        <p className="relative z-20 text-[.8rem] text-neutral-600">
                            مرجوع شده
                        </p>
                    </button>
                </li>
                <span
                    className={`!w-[calc(100%/4-4px)] h-[calc(100%-4px)] block absolute top-1/2 z-10 -translate-y-1/2 bg-white lg:bg-neutral-100 rounded-[10px] md:rounded-xl ${
                        status === "فعال"
                            ? "translate-x-[calc(0%+1px)]"
                            : status === "تحویل شده"
                            ? "translate-x-[calc(-100%-2px)]"
                            : status === "لغو شده"
                            ? "translate-x-[calc(-200%-4px)]"
                            : status === "مرجوع شده"
                            ? "translate-x-[calc(-300%-10px)]"
                            : "translate-x-[0]"
                    } transition-all duration-300`}
                ></span>
            </ul>
        </div>
    );
};

export default Statuses;
