import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import BackdropForm from "@/src/app/_components/_modules/backdrop/BackdropForm";
import useCreateQuestionReply from "@/src/queries/question/reply/useCreate";
import { useContext, useState } from "react";
import { Context } from "../../Item";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Container = ({ isOpen, onClose }: Props) => {
    const [data, setData] = useState("");
    const { _id } = useContext(Context);
    const reply = useCreateQuestionReply(_id);
    const { isPending, isSuccess, error, data: resData, reset } = reply;
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
                            //
                        },
                    })
                }
            >
                <div className="max-w-[400px] h-[200px]">
                    <textarea
                        className="w-full h-full bg-[unset] p-4 px-5"
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
