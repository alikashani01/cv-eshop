import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

const RatingContainer = () => {
    const { currentReview } = useContext(Context);
    return (
        <Rating
            readOnly
            value={currentReview?.rating}
            precision={0.5}
            sx={{
                gap: "2px",
                direction: "ltr",
                fontSize: "2rem",
                alignSelf: "center",
            }}
            emptyIcon={
                <StarRoundedIcon style={{ color: "#ccc" }} fontSize="inherit" />
            }
            icon={
                <StarRoundedIcon style={{ color: "gold" }} fontSize="inherit" />
            }
        />
    );
};

export default RatingContainer;
