import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const DiscountBadge = ({
    discount,
}: {
    discount: number | null | undefined;
}) => {
    return (
        discount && (
            <div className="flex items-center justify-center gap-1">
                <p className="text-rose-500 text-xl pt-[3px]">
                    {convertEngToPer(discount)}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#f43f5e"
                    className="bi bi-percent"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
            </div>
        )
    );
};

export default DiscountBadge;
