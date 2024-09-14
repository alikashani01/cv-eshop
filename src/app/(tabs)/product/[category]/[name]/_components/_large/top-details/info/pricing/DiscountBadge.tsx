import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const DiscountBadge = ({
    discount,
}: {
    discount: number | null | undefined;
}) => {
    return (
        discount && (
            <div className="w-[35px] h-[35px] rounded-full bg-neutral-700 flex items-center justify-center gap-[2px]">
                <p className="text-rose-500 text-xl pt-[3px]">
                    {convertEngToPer(discount)}
                </p>
                <span className="font-sfl text-[.75rem] text-rose-500 mt-[3px]">
                    %
                </span>
            </div>
        )
    );
};

export default DiscountBadge;
