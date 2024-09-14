const removeAllFromHistory = (storage: Storage | null) => {
    let updatedList = [] as string[];
    if (storage) {
        storage.setItem("searchHistory", JSON.stringify(updatedList));
    }
    return {
        searchHistory: [],
    };
};

export default removeAllFromHistory;
