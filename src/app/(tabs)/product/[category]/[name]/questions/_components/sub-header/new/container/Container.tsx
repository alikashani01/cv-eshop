import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import BackdropForm from "@/src/app/_components/_modules/backdrop/BackdropForm";
import useCreateQuestion from "@/src/queries/question/useCreate";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../../_Context";
import Body from "./body/Body";
import { Context } from "./Context";
import Error from "./Error";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    const [isError, setIsError] = useState(false);

    const { _id } = useContext(ProductContext);

    const { data } = useContext(Context);

    const create = useCreateQuestion(_id!);

    const { isPending, isSuccess, data: resData, error, reset } = create;

    const handleSubmit = () => {
        if (!data.subject && !data.content) return setIsError(true);
        create.mutate(data);
    };

    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);

    return (
        <>
            <BackdropForm
                isOpen={isOpen}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="ثبت پرسش"
                onSubmit={() => handleSubmit()}
                title="پرسش جدید"
            >
                <Body />
            </BackdropForm>

            <Error
                open={isError}
                onClose={() => setIsError(false)}
                subject={data.subject}
            />

            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={resData || ""}
                reset={reset}
            />
        </>
    );
};

export default Container;
