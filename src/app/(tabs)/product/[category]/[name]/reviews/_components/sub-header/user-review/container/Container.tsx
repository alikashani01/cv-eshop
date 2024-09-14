import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import BackdropForm from "@/src/app/_components/_modules/backdrop/BackdropForm";
import useCreateReview from "@/src/queries/review/useCreate";
import useDeleteReview from "@/src/queries/review/useDelete";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../../_Context";
import { Context } from "./Context";
import CurrentReview from "./current-review/CurrentReview";
import Error from "./Error";
import New from "./new/New";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    const [isError, setIsError] = useState(false);

    const { _id } = useContext(ProductContext);

    const { data, reviewID, currentReview } = useContext(Context);

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
            {currentReview?._id ? (
                <Backdrop isOpen={isOpen} onClose={onClose}>
                    <CurrentReview onClose={onClose} />
                </Backdrop>
            ) : (
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
                    <New />
                </BackdropForm>
            )}

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
