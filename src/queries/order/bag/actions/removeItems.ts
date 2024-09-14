const removeItems = () => {
    localStorage.removeItem("bagItems");
    return {
        items: [],
    };
};

export default removeItems;
