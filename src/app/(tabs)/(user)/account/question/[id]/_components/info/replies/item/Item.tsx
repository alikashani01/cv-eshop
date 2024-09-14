import { Reply } from "@/src/queries/question/Entities";
import CreatedAt from "./CreatedAt";
import Delete from "./Delete";

const Item = ({ reply }: { reply: Reply }) => {
    return (
        <li className="flex items-center justify-between gap-4 py-4 px-1 border-t border-white">
            <div className="flex-grow">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <p className="text-[.75rem] text-neutral-600 font-shabt">
                            {reply.user.fullName}
                        </p>
                        <p className="text-[.75rem] text-neutral-600 font-shabt">
                            {reply.userType}
                        </p>
                    </div>
                    <CreatedAt createdAt={reply.createdAt || ""} />
                </div>
                <p className="mt-1 text-[.9rem] text-neutral-700 leading-[26px]">
                    {reply.content}
                </p>
            </div>
            <Delete replyId={reply._id} replyUser={reply.user._id} />
        </li>
    );
};

export default Item;
