import { useContext } from "react";
import { Context } from "../Container";

const Comment = () => {
    const { comment } = useContext(Context);
    return (
        <p className="p-3 px-4 bg-second-theme rounded-2xl text-neutral-700 text-[.95rem] leading-7">
            {comment}
        </p>
    );
};

export default Comment;
