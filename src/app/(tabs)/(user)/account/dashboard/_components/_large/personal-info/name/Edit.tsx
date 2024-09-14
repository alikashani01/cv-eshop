import ActionResponse from "@/src/app/_components/_modules/action-response/ActionResponse";
import BackdropForm from "@/src/app/_components/_modules/backdrop/BackdropForm";
import useEditName from "@/src/queries/user/profile/useEditName";
import { FormEvent, useEffect, useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    fullName: string;
}

const Edit = ({ isOpen, onClose, fullName }: Props) => {
    const editName = useEditName();
    const { isPending, isSuccess, error, reset, data: dataResponse } = editName;

    const [data, setData] = useState("");

    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setData(target.value);
    };

    useEffect(() => {
        fullName && setData(fullName);
    }, [fullName]);

    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);
    return (
        <>
            <BackdropForm
                isOpen={isOpen}
                onClose={onClose}
                isLoading={isPending}
                submitTitle="ذخیره"
                onSubmit={() => editName.mutate(data)}
                title="ویرایش نام"
            >
                <div className="flex items-center justify-center">
                    <input
                        type="text"
                        className="w-[350px] h-14 p-4 px-5 bg-[unset] rounded-none border-y border-slate-600 text-white transition-all duration-500"
                        placeholder=""
                        value={data}
                        onChange={handleChange}
                    />
                </div>
            </BackdropForm>
            <ActionResponse
                success={isSuccess}
                error={error?.message || ""}
                message={dataResponse || ""}
                reset={reset}
            />
        </>
    );
};

export default Edit;
