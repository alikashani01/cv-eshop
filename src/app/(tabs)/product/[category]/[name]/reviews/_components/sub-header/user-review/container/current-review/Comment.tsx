import { useContext } from "react";
import { Context } from "../Context";

const Comment = () => {
    const { currentReview } = useContext(Context);
    return (
        <p className="leading-7 md:leading-8 text-sm md:text-[1rem] text-neutral-200">
            {currentReview?.comment}
        </p>
    );
};

export default Comment;
