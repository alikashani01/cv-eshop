import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useContext } from "react";
import { Context } from "../FullReview";

const Rating = () => {
    const { rating } = useContext(Context);
    let roundedRating = Math.round(rating * 10) / 10;
    return (
        <div className="flex items-center">
            <StarRoundedIcon
                style={{
                    marginBottom: "0px",
                    fontSize: "1.5rem",
                    color: "orange",
                }}
            />
            <div className="flex items-center gap-1 mt-1">
                <p className="text-2xl text-neutral-200 font-shabb tracking-widest">
                    {convertEngToPer(roundedRating)}
                </p>
                <div className="flex items-center justify-center gap-1">
                    <p className="mt-1 text-[.8rem] text-neutral-400 font-shabt">
                        /
                    </p>
                    <p className="mt-[2px] text-[1.1rem] text-neutral-400 font-shabt">
                        ۵
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rating;
