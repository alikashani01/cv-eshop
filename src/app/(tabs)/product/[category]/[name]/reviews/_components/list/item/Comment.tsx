import { useContext } from "react";
import { Context } from "./Item";

const Comment = () => {
    const { comment } = useContext(Context);
    const limitedComment =
        comment?.length! > 300 ? `${comment?.slice(0, 300)} ...` : comment;
    return (
        <p className="pb-3 px-4 text-neutral-600 font-shabt text-[.9rem] leading-7">
            {limitedComment}
            <span className="text-blue-500 pb-[5px] text-sm">&nbsp; بیشتر</span>
        </p>
    );
};

export default Comment;
