import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";

const RatingContainer = ({ rating }: { rating: number }) => {
    return (
        <Rating
            readOnly
            name="rating"
            value={rating}
            precision={0.5}
            sx={{
                gap: "2px",
                direction: "ltr",
                fontSize: "1rem",
            }}
            emptyIcon={
                <StarIcon
                    style={{ opacity: 1, color: "#777" }}
                    fontSize="inherit"
                />
            }
            icon={<StarIcon style={{ color: "gold" }} fontSize="inherit" />}
        />
    );
};

export default RatingContainer;
