import useDeleteQuestionReply from "@/src/queries/question/reply/useDelete";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../../_Context";

interface Props {
    replyUser: string;
    replyId: string;
}
const Delete = ({ replyId, replyUser }: Props) => {
    const { _id, product } = useContext(Context);
    const { data: user } = useFetchUserDetails();
    const deleteReply = useDeleteQuestionReply(replyId, _id, product?._id);
    const { isPending } = deleteReply;
    return (
        user?._id === replyUser && (
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
