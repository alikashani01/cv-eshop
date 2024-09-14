import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { Context } from "./ProductQuickView";

const RatingContainer = () => {
    const { reviews, rating } = useContext(Context);
    return (
        <div className="flex items-center justify-center gap-1 pt-2">
            <Rating
                readOnly
                name="rating"
                value={rating}
                precision={0.5}
                sx={{ gap: "1px", direction: "ltr" }}
                emptyIcon={
                    <StarIcon
                        style={{ opacity: 1, color: "#777" }}
                        fontSize="inherit"
                    />
                }
                icon={<StarIcon style={{ color: "gold" }} fontSize="inherit" />}
            />
            <p className="text-sm text-[#888] mt-1 tracking-[1px]">
                {convertEngToPer(reviews?.length!)}
            </p>
        </div>
    );
};

export default RatingContainer;
