import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useContext } from "react";
import { Context } from "../../Container";

const Rating = () => {
    const { rating } = useContext(Context);
    let roundedRating = Math.round(rating * 10) / 10;
    return (
        <div className="flex flex-col items-center">
            <StarRoundedIcon
                style={{
                    marginBottom: "0px",
                    fontSize: "1.5rem",
                    color: "orange",
                }}
            />
            <div className="-mt-[2px]">
                <p className="text-2xl text-neutral-700 font-shabb tracking-widest">
                    {convertEngToPer(roundedRating)}
                </p>
                <div className="flex items-center justify-center gap-1 -mt-2">
                    <p className="text-[.8rem] text-neutral-500 font-shabt">
                        از
                    </p>
                    <p className="text-[1.1rem] text-neutral-500 font-shabt">
                        ۵
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rating;
