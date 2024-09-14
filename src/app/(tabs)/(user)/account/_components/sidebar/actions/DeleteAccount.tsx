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
                className="text-sm text-red-500 justify-between px-4"
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
            <Modal
                open={isOpen}
                onClose={handleOpen}
                title="حساب کاربری حذف شود؟"
            >
                <div className="h-14 flex *:flex-1">
                    <button
                        className="gap-2 text-sm text-red-500"
                        onClick={() => deleteAccount.mutate()}
                        disabled={isPending}
                    >
                        {isPending && (
                            <CircularProgress
                                size={16}
                                sx={{ color: "#ff0030" }}
                            />
                        )}
                        حذف کن
                    </button>
                    <button
                        className="text-sm border-r border-neutral-200"
                        onClick={handleOpen}
                    >
                        لغو
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default DeleteAccount;
