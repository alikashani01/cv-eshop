import useDeleteAllLocations from "@/src/queries/user/address/useDeleteAll";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const DeleteAll = ({ onToggle }: { onToggle: () => void }) => {
    const deleteAddresses = useDeleteAllLocations();
    const { isPending, isSuccess } = deleteAddresses;
    useEffect(() => {
        isSuccess && onToggle();
    }, [isSuccess, onToggle]);
    return (
        <button
            className="gap-2 text-[.9rem] text-[#ff6666]"
            onClick={() => deleteAddresses.mutate()}
            disabled={isPending}
        >
            {isPending && (
                <CircularProgress size={16} sx={{ color: "#ff6666" }} />
            )}
            حذف تمام آدرس‌ها
        </button>
    );
};

export default DeleteAll;
