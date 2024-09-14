import { SearchStore } from "./store";

const handleSearchHistory =
    (keyword: string, storage: Storage | null) => (state: SearchStore) => {
        let updatedList;
        if (state.searchHistory.includes(keyword)) {
            updatedList = [...state.searchHistory];
        } else {
            updatedList = [keyword, ...state.searchHistory];
        }
        if (storage) {
            storage.setItem("searchHistory", JSON.stringify(updatedList));
        }
        return {
            searchHistory: [...updatedList],
        };
    };

export default handleSearchHistory;
