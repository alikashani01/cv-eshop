import ActionModal from "@/src/app/_components/_modules/action-modal/ActionModal";
import Modal from "@/src/app/_components/_modules/Modal";
import useDeleteAccount from "@/src/queries/user/useDelete";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const DeleteAccount = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    const deleteAccount = useDeleteAccount();
    const { isPending } = deleteAccount;
    return (
        <>
            <button
                className="w-full h-14 justify-between px-5 mt-4 bg-second-theme rounded-2xl text-sm text-rose-500"
                onClick={handleOpen}
            >
                <div className="flex items-center gap-2">حذف حساب کاربری</div>
                <Image
                    width={20}
                    height={20}
                    src="/icons/trash/red.png"
                    alt=""
                />
            </button>
            <ActionModal open={isOpen} onClose={handleOpen}>
                <>
                    <p className="text-[.9rem] text-neutral-600">
                        حساب کاربری‌تان حذف شود؟
                    </p>
                </>
                <button
                    className="w-full h-14 justify-center gap-2 border-t border-neutral-200 text-sm text-red-500"
                    onClick={() => deleteAccount.mutate()}
                    disabled={isPending}
                >
                    {isPending && (
                        <CircularProgress size={16} sx={{ color: "#ff0030" }} />
                    )}
                    حذف کن
                </button>
            </ActionModal>
        </>
    );
};

export default DeleteAccount;
