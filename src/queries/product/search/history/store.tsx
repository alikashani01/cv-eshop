import { create } from "zustand";
import handleSearchHistory from "./handleSearchHistory";
import removeAllFromHistory from "./removeAllFromHistory";
import removeFromHistory from "./removeFromHistory";

export interface SearchStore {
    searchHistory: string[];
    setSearchHistory: (keyword: string) => void;
    setRemoveHistory: (keyword: string) => void;
    setRemoveAllHistory: () => void;
}

const useSearchStore = create<SearchStore>((set) => {
    let storage: Storage | null = null;
    if (typeof window !== "undefined") storage = window.localStorage;

    const storedSearchHistory = storage?.getItem("searchHistory")
        ? JSON.parse(storage?.getItem("searchHistory")!)
        : [];

    try {
        return {
            searchHistory: storedSearchHistory,
            setSearchHistory: (keyword) =>
                set(handleSearchHistory(keyword, storage)),
            setRemoveHistory: (keyword) =>
                set(removeFromHistory(keyword, storage)),
            setRemoveAllHistory: () => set(removeAllFromHistory(storage)),
        };
    } catch (error) {
        console.error(error);
    }
    return {
        searchHistory: [],
        setSearchHistory: () => {},
        setRemoveHistory: () => {},
        setRemoveAllHistory: () => {},
    };
});

export default useSearchStore;
