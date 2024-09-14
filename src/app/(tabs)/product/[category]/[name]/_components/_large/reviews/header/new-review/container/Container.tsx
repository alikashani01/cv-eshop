import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import BackdropForm from "@/src/app/_components/_modules/backdrop/BackdropForm";
import useCreateReview from "@/src/queries/review/useCreate";
import useDeleteReview from "@/src/queries/review/useDelete";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Body from "./body/Body";
import { Context } from "./Context";
import Error from "./Error";
import { ProductContext } from "../../../../../../_Context";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    const [isError, setIsError] = useState(false);
    const { _id } = useContext(ProductContext);
    const { data, reviewID } = useContext(Context);
    const addReview = useCreateReview(_id!);
    const { isPending, isSuccess, data: resData, error, reset } = addReview;
    const handleSubmit = () => {
        if (!data.rating) return setIsError(true);
        if (!data.title && !data.comment) return setIsError(true);
        addReview.mutate(data);
    };
    const deleteReview = useDeleteReview(reviewID!, _id!);
    const {
        isSuccess: successDelete,
        isPending: pendingDelete,
        error: errorDelete,
        data: dataDelete,
        reset: resetDelete,
    } = deleteReview;
    useEffect(() => {
        (isSuccess || successDelete) && onClose();
    }, [isSuccess, successDelete]);

    return (
        <>
            <BackdropForm
                isOpen={isOpen}
                onClose={onClose}
                isLoading={isPending || pendingDelete}
                submitTitle={reviewID ? "حذف دیدگاه" : "ثبت دیدگاه"}
                onSubmit={() => {
                    reviewID ? deleteReview.mutate() : handleSubmit();
                }}
                title="دیدگاه من"
            >
                <Body />
            </BackdropForm>

            <Error
                open={isError}
                onClose={() => setIsError(false)}
                rating={data.rating}
                title={data.title}
            />

            <ActionResponse
                success={isSuccess || successDelete}
                error={error?.message || errorDelete?.message || ""}
                message={resData || dataDelete || ""}
                reset={reset || resetDelete}
            />
        </>
    );
};

export default Container;
