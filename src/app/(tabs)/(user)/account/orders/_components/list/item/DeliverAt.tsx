import {
    convertDayNameToPersianName,
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
    convertTimeToPersianNumber,
} from "@/src/utils/dateConverters";
import { useContext } from "react";
import { Context } from "./Item";

const DeliverAt = () => {
    const { createdAt } = useContext(Context);
    return (
        <div className="flex items-center justify-between gap-2 pt-1">
            <p className="pt-[1px] text-[.8rem] font-shabt text-neutral-500">
                تحویل:
            </p>
            <div className="flex items-center gap-1 *:text-neutral-500 *:text-[.8rem]">
                <p className="">{convertDayNameToPersianName(createdAt)}</p>
                <p className="pt-[2px] tracking-[1px]">
                    {convertDayNumberToPersianNumber(createdAt)}
                </p>
                <p className="pt-[2px]">
                    {convertMonthNameToPersianName(createdAt)}
                </p>
                <p className="pt-[3px] tracking-[1px]">
                    {convertTimeToPersianNumber(createdAt)}
                </p>
            </div>
        </div>
    );
};

export default DeliverAt;
