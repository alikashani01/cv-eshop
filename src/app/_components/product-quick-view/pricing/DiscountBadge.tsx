import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const DiscountBadge = ({ discount }: { discount: number }) => {
    return (
        discount !== 0 && (
            <div className="rounded-full text-white bg-rose-500 pt-[1px] pr-[1.5px] w-[38px] h-[38px] flex justify-center items-center gap-[2px]">
                <p className="text-[1.1rem] pt-[1px]">
                    {convertEngToPer(discount!)}
                </p>
                <span className="text-sm pt-[2px]">%</span>
            </div>
        )
    );
};

export default DiscountBadge;
