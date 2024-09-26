import useDeleteQuestionReply from "@/src/queries/question/reply/useDelete";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { ReplyContext } from "../Item";

const Delete = () => {
    const { user: replyUser, _id, question } = useContext(ReplyContext);
    const { data: user } = useFetchUserDetails();
    const deleteReply = useDeleteQuestionReply(_id, question?._id!);
    const { isPending } = deleteReply;
    return (
        user?._id === replyUser._id && (
            <button
                className="min-w-[22px]"
                onClick={() => deleteReply.mutate()}
            >
                {isPending ? (
                    <CircularProgress size={14} sx={{ color: "#ff6666" }} />
                ) : (
                    <Image
                        width={18}
                        height={18}
                        src="/icons/trash/red.png"
                        alt=""
                    />
                )}
            </button>
        )
    );
};

export default Delete;
