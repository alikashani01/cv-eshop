import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";

const RatingContainer = () => {
    const { rating } = useContext(ProductContext);
    let roundedRating = Math.round(rating * 10) / 10;
    return (
        <div className="justify-end gap-1">
            <StarRoundedIcon
                style={{
                    marginBottom: "0px",
                    fontSize: "1.3rem",
                    color: "orange",
                }}
            />
            <div className="flex items-center gap-1">
                <p className="text-[1.3rem] mt-[3.3px] font-shabb tracking-widest text-neutral-700">
                    {convertEngToPer(roundedRating)}
                </p>
                <p className="text-[.9rem] pt-[4.8px] text-neutral-400 font-shabt">
                    /
                </p>
                <p className="text-[1rem] text-neutral-500 mt-[4.8px] font-shabt">
                    ۵
                </p>
            </div>
        </div>
    );
};

export default RatingContainer;
