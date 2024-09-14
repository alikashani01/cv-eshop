import { useContext } from "react";
import { Context } from "./FullReview";

const Comment = () => {
    const { comment } = useContext(Context);
    return (
        <p className="text-neutral-200 text-sm lg:text-[.95rem] leading-7">
            {comment}
        </p>
    );
};

export default Comment;
