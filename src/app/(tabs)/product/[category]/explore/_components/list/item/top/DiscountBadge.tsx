import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../Item";

const DiscountBadge = () => {
    const product = useContext(Context);
    const { pricing } = product;
    const isDiscounted = pricing?.find(
        (price) => price.discount?.value! > 0 && price
    );
    return (
        isDiscounted && (
            <div className="absolute -left-2 -top-2 flex items-center justify-center gap-[2px] w-[35px] h-[35px] rounded-full bg-[#303]">
                <p className="text-[1rem] tracking-wider pt-[2.9px] text-[#fff]">
                    {convertEngToPer(isDiscounted.discount?.value!)}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#fff"
                    className="bi bi-percent mt-[1px]"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
            </div>
        )
    );
};

export default DiscountBadge;
