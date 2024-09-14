import { SearchStore } from "./store";

const removeFromHistory =
    (keyword: string, storage: Storage | null) => (state: SearchStore) => {
        let updatedList;
        if (state.searchHistory.includes(keyword)) {
            updatedList = state.searchHistory.filter((i) => i !== keyword);
        } else {
            updatedList = [...state.searchHistory];
        }
        if (storage) {
            storage.setItem("searchHistory", JSON.stringify(updatedList));
        }
        return {
            searchHistory: [...updatedList],
        };
    };

export default removeFromHistory;
