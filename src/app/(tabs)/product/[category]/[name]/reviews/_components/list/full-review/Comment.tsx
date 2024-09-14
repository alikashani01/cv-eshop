import { useContext } from "react";
import { Context } from "./FullReview";

const Comment = () => {
    const { comment } = useContext(Context);
    return (
        <p className="pt-4 lg:pt-0 px-6 text-neutral-300 text-sm lg:text-[.95rem] leading-7">
            {comment}
        </p>
    );
};

export default Comment;
