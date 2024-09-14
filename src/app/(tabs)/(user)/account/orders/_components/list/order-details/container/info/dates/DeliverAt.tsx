import {
    convertDayNameToPersianName,
    convertDayNumberToPersianNumber,
    convertMonthNameToPersianName,
} from "@/src/utils/dateConverters";

const DeliverAt = ({ deliverAt }: { deliverAt: string }) => {
    return (
        <div className="bg-second-theme h-20 flex items-center justify-between p-4 rounded-xl">
            <p className="text-[.8rem] text-neutral-500">تاریخ تحویل</p>
            <div className="flex flex-col items-end justify-between">
                <p className="text-[.9rem] text-neutral-800 flex items-center justify-center gap-2">
                    <span>{convertDayNameToPersianName(deliverAt)} </span>
                    <span>{convertDayNumberToPersianNumber(deliverAt)} </span>
                    <span>{convertMonthNameToPersianName(deliverAt)} </span>
                </p>

                <p className="mt-1 text-neutral-700">۱۲ - ۹</p>
            </div>
        </div>
    );
};

export default DeliverAt;
