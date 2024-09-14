import useDeleteReview from "@/src/queries/review/useDelete";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../Item";

const Delete = () => {
    const { _id, product } = useContext(Context);
    const deleteReview = useDeleteReview(_id, product?._id);
    return (
        <button className="w-[22px]" onClick={() => deleteReview.mutate()}>
            {deleteReview.isPending ? (
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
    );
};

export default Delete;
