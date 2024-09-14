import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

const RatingContainer = () => {
    const {
        data: { rating },
        onChange,
    } = useContext(Context);
    return (
        <div className="flex items-center flex-col gap-1 py-4">
            <p className="text-neutral-500">امتیاز دهید</p>
            <Rating
                name="rating"
                value={rating}
                onChange={onChange}
                precision={0.5}
                sx={{ gap: "2px", direction: "ltr", fontSize: "2rem" }}
                emptyIcon={
                    <StarRoundedIcon
                        style={{ opacity: 1, color: "#aaaaaa" }}
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
