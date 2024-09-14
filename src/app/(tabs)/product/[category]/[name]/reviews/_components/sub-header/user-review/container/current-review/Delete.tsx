import { ProductContext } from "@/src/app/(tabs)/product/[category]/[name]/_Context";
import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import useDeleteReview from "@/src/queries/review/useDelete";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../Context";

const Delete = ({ onClose }: { onClose: () => void }) => {
    const { _id: productID } = useContext(ProductContext);
    const { reviewID } = useContext(Context);
    const deleteReview = useDeleteReview(reviewID!, productID!);
    const { isPending, isSuccess, error, data, reset } = deleteReview;
    return (
        <>
            <button
                onClick={() =>
                    deleteReview.mutate(undefined, {
                        onSuccess: () => onClose(),
                    })
                }
                disabled={isPending}
            >
                {isPending ? (
                    <CircularProgress size={15} sx={{ color: "#ff0039" }} />
                ) : (
                    <Image
                        width={22}
                        height={22}
                        src="/icons/trash/red.png"
                        alt=""
                    />
                )}
            </button>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={data || ""}
                reset={reset}
            />
        </>
    );
};

export default Delete;
