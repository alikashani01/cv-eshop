import {
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
} from "@/src/utils/dateConverters";

const CreatedAt = ({ createdAt }: { createdAt: string }) => {
    return (
        <div className="flex items-center gap-1 *:text-[.65rem] mt-[1px] *:text-[#aaa] *:font-shabmt">
            <span>{convertDayNumberToPersianNumber(createdAt)}</span>
            <span>{convertMonthNameToPersianName(createdAt)}</span>
        </div>
    );
};

export default CreatedAt;
