import {
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
} from "@/src/utils/dateConverters";

const CreatedAt = ({ createdAt }: { createdAt: string }) => {
    return (
        <div className="flex items-center gap-1 *:text-[.8rem] *:font-shabt *:text-neutral-600">
            <p>{convertDayNumberToPersianNumber(createdAt)}</p>
            <p>{convertMonthNameToPersianName(createdAt)}</p>
        </div>
    );
};

export default CreatedAt;
