import {
    convertDayNameToPersianName,
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
    convertTimeToPersianNumber,
} from "@/src/utils/dateConverters";
import { useContext } from "react";
import { Context } from "./Item";

const CreatedAt = () => {
    const { createdAt } = useContext(Context);
    return (
        <div className="flex items-center justify-between gap-2 border-b border-neutral-100 lg:border-white pb-1">
            <p className="pt-[1px] text-[.8rem] font-shabt text-neutral-500">
                ثبت:
            </p>
            <div className="flex items-center gap-1">
                <p className="text-[.8rem] text-neutral-500">
                    {convertDayNameToPersianName(createdAt)}
                </p>
                <p className="pt-[2px] tracking-[1px] text-[.8rem] text-neutral-500">
                    {convertDayNumberToPersianNumber(createdAt)}
                </p>
                <p className="pt-[2px] text-[.8rem] text-neutral-500">
                    {convertMonthNameToPersianName(createdAt)}
                </p>
                <p className="pt-[3px] tracking-[1px] text-[.8rem] text-neutral-500">
                    {convertTimeToPersianNumber(createdAt)}
                </p>
            </div>
        </div>
    );
};

export default CreatedAt;
