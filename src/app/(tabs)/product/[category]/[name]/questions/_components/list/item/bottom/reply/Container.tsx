import { ProductContext } from "@/src/app/(tabs)/product/[category]/[name]/_Context";
import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import BackdropForm from "@/src/app/_components/_modules/backdrop/BackdropForm";
import useCreateQuestionReply from "@/src/queries/question/reply/useCreate";
import { useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Context } from "../../Item";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    const [data, setData] = useState("");
    const { _id: productID } = useContext(ProductContext);
    const { _id } = useContext(Context);
    const reply = useCreateQuestionReply(_id);
    const { isPending, isSuccess, error, data: resData, reset } = reply;
    const queryClient = useQueryClient();
    return (
        <>
            <BackdropForm
                isOpen={isOpen}
                onClose={onClose}
                title="پاسخ جدید"
                submitTitle="ثبت پاسخ"
                isLoading={isPending}
                isSuccess={isSuccess}
                onSubmit={() =>
                    reply.mutate(data, {
                        onSuccess: () => {
                            queryClient.invalidateQueries({
                                queryKey: ["questions", productID],
                            });
                        },
                    })
                }
            >
                <div className="w-[500px] h-[200px]">
                    <textarea
                        className="w-full h-full p-4 px-5 bg-[unset] text-neutral-200"
                        id=""
                        placeholder="متن پاسخ ..."
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
            </BackdropForm>
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
