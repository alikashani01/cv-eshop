"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const { back } = useRouter();
    return (
        <div className="flex flex-col items-center gap-2 pt-20">
            <p className="text-5xl tracking-[4px] font-shabb text-slate-800">
                ۴۰۴
            </p>
            <p>صفحه مورد نظر پیدا نشد</p>
            <button className="mt-2 text-sm" onClick={() => back()}>
                بازگشت
            </button>
        </div>
    );
};

export default NotFound;
