"use client";
import useSearchStore from "@/src/queries/product/search/history/store";

const DeleteHistory = () => {
    const searchHistory = useSearchStore((s) => s.searchHistory);
    const setRemoveAllHistory = useSearchStore((s) => s.setRemoveAllHistory);
    return (
        searchHistory.length !== 0 && (
            <button className="text-sm" onClick={setRemoveAllHistory}>
                حذف تاریخچه
            </button>
        )
    );
};

export default DeleteHistory;
