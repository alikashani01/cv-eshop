import {
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
} from "@/src/utils/dateConverters";
import { useContext } from "react";
import { ReplyContext } from "../Item";

const CreatedAt = () => {
    const { createdAt } = useContext(ReplyContext);
    return (
        <div className="flex items-center gap-1 *:text-[.7rem] *:font-shabt *:text-neutral-400">
            <p>{convertDayNumberToPersianNumber(createdAt!)}</p>
            <p>{convertMonthNameToPersianName(createdAt!)}</p>
        </div>
    );
};

export default CreatedAt;
