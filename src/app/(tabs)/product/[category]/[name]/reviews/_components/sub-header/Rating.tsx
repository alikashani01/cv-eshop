"use client";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";

const RatingContainer = () => {
    const { rating } = useContext(ProductContext);
    let roundedRating = Math.round(rating! * 10) / 10;
    return (
        <div className="flex items-center gap-1 mb-[2px]">
            <StarRoundedIcon style={{ fontSize: "1.5rem", color: "gold" }} />
            {rating === 0 ? (
                <p className="text-sm text-neutral-500 font-shabt mb-[1px]">
                    بدون امتیاز
                </p>
            ) : (
                <div className="flex items-center gap-1">
                    <p className="text-xl md:text-2xl mt-[3.3px] text-neutral-600 font-shabb tracking-widest">
                        {convertEngToPer(roundedRating)}
                    </p>
                    <p className="text-sm md:text-[.95rem] mt-1 text-neutral-500 font-shabt">
                        /
                    </p>
                    <p className="text-[1rem] md:text-[1.2rem] text-neutral-500 mt-[4.5px] font-shabt">
                        ۵
                    </p>
                </div>
            )}
        </div>
    );
};

export default RatingContainer;
