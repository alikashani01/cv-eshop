import {
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
} from "@/src/utils/dateConverters";
import { useContext } from "react";
import { Context } from "../Item";

const Date = () => {
    const { createdAt } = useContext(Context);
    return (
        <div className="flex items-center gap-1 *:text-[.65rem] mt-[1px] *:text-[#aaa] *:font-shabmt">
            <span>{convertDayNumberToPersianNumber(createdAt!)}</span>
            <span>{convertMonthNameToPersianName(createdAt!)}</span>
        </div>
    );
};

export default Date;
