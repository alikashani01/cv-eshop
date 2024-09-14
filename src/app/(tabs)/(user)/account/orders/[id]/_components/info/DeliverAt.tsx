"use client";
import {
    convertDayNameToPersianName,
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
} from "@/src/utils/dateConverters";
import { useContext } from "react";
import { Context } from "../../_Context";

const DeliverAt = () => {
    const { dates } = useContext(Context);
    return (
        <div className="flex flex-col items-end justify-between">
            <p className="text-[.9rem] flex items-center justify-center gap-2">
                <span>{convertDayNameToPersianName(dates?.delivered!)} </span>
                <span>
                    {convertDayNumberToPersianNumber(dates?.delivered!)}{" "}
                </span>
                <span>{convertMonthNameToPersianName(dates?.delivered!)} </span>
            </p>
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="orange"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p className="pt-[1px]">۱۲ - ۹</p>
            </div>
        </div>
    );
};

export default DeliverAt;
