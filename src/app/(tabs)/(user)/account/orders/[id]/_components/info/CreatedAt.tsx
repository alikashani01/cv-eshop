"use client";
import {
    convertDayNameToPersianName,
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
    convertTimeToPersianNumber,
} from "@/src/utils/dateConverters";
import { useContext } from "react";
import { Context } from "../../_Context";

const CreatedAt = () => {
    const { createdAt } = useContext(Context);
    return (
        <div className="flex items-center justify-between">
            <p className="text-[.9rem] flex items-center justify-center gap-2">
                <span>{convertDayNameToPersianName(createdAt)} </span>
                <span>{convertDayNumberToPersianNumber(createdAt)} </span>
                <span>{convertMonthNameToPersianName(createdAt)} </span>
            </p>

            <p className="tracking-[2px]">
                {convertTimeToPersianNumber(createdAt)}{" "}
            </p>
        </div>
    );
};

export default CreatedAt;
