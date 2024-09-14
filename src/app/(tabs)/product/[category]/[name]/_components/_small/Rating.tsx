import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../_Context";

const RatingContainer = () => {
    const { reviews, rating } = useContext(ProductContext);
    return (
        <div className="flex justify-between items-center px-4 py-2 rounded-xl bg-second-theme">
            <p className="h-7 flex items-center text-[.9rem] text-[#aaa] font-shabt">
                {reviews?.length === 0 ? (
                    <span className="text-[.8rem] text-[#888] font-shabt px-1">
                        بدون امتیاز
                    </span>
                ) : (
                    <span className="font-shabt">
                        ( {convertEngToPer(reviews?.length!)} )
                    </span>
                )}
            </p>
            <Rating
                readOnly
                name="rating"
                value={rating}
                precision={0.5}
                sx={{ gap: "2px", direction: "ltr", fontSize: "1.4rem" }}
                emptyIcon={
                    <StarRoundedIcon
                        style={{ opacity: 1, color: "#aaa" }}
                        fontSize="inherit"
                    />
                }
                icon={
                    <StarRoundedIcon
                        style={{ color: "gold" }}
                        fontSize="inherit"
                    />
                }
            />
        </div>
    );
};

export default RatingContainer;
