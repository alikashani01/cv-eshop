import {
    convertDayNameToPersianName,
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
    convertTimeToPersianNumber,
} from "@/src/utils/dateConverters";

const OrderedAt = ({ createdAt }: { createdAt: string }) => {
    return (
        <div className="bg-second-theme h-20 flex items-center justify-between p-4 rounded-xl">
            <p className="text-[.8rem] text-neutral-500">تاریخ ثبت</p>
            <div className="flex flex-col items-end justify-between">
                <p className="text-[.9rem] text-neutral-800 flex items-center justify-center gap-2">
                    <span>{convertDayNameToPersianName(createdAt)} </span>
                    <span>{convertDayNumberToPersianNumber(createdAt)} </span>
                    <span>{convertMonthNameToPersianName(createdAt)} </span>
                </p>
                <p className="tracking-[2px] text-neutral-700 mt-1">
                    {convertTimeToPersianNumber(createdAt)}{" "}
                </p>
            </div>
        </div>
    );
};

export default OrderedAt;
