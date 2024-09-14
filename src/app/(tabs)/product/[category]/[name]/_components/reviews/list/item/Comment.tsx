import { useContext } from "react";
import { Context } from "./Item";

const Comment = () => {
    const { comment } = useContext(Context);
    const limitedComment =
        comment?.length! > 200 ? `${comment?.slice(0, 200)} ...` : comment;
    return (
        <p className="h-36 pb-3 px-4 overflow-hidden text-neutral-600 font-shabt text-[.85rem] leading-[26px]">
            {limitedComment}
            <span className="text-blue-500 pb-[5px] text-sm">&nbsp; بیشتر</span>
        </p>
    );
};

export default Comment;
