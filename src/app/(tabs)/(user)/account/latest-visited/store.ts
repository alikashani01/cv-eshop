import { create } from "zustand";

type Product = {
    _id: string;
    cover: string;
    nameEn: string;
    nameFa: string;
    brandEn: string;
    brandFa: string;
    categoryEn: string;
    categoryFa: string;
};

type Store = {
    products: Product[];
    setAdd: (product: Product) => void;
    setRemoveAll: () => void;
};

const useLatestVisitedStore = create<Store>((set) => {
    let storage: Storage | null = null;
    if (typeof window !== "undefined") storage = window.localStorage;

    if (!storage) {
        console.error("localStorage is not supported in this browser.");
    }
    try {
        const storedProducts = storage?.getItem("latestVisited");
        const initialStoredProducts: Product[] = storedProducts
            ? JSON.parse(storedProducts)
            : [];

        return {
            products: initialStoredProducts,
            setAdd: (product: Product) =>
                set((state: { products: Product[] }) => {
                    const itemExists = state.products.find(
                        (p) => p._id === product._id
                    );
                    const newProducts = itemExists
                        ? [...state.products]
                        : [product, ...state.products];

                    storage?.setItem(
                        "latestVisited",
                        JSON.stringify(newProducts)
                    );
                    return {
                        products: newProducts,
                    };
                }),
            setRemoveAll: () =>
                set(() => {
                    const newItems: Product[] = [];

                    storage?.setItem("latestVisited", JSON.stringify(newItems));
                    return {
                        products: [],
                    };
                }),
        };
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
    }
    return {
        products: [],
        setAdd: () => {},
        setRemoveAll: () => {},
    };
});

export default useLatestVisitedStore;
