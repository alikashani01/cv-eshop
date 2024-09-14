"use client";
import { Product } from "@/src/queries/product/Entities";
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";
import { ProductContext } from "../_Context";

type IContext = {
    selectedList: Product[];
    onSelect: (product: Product) => void;
    isComparing: boolean;
    onComparing: () => void;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [isComparing, setIsComparing] = useState(false);
    const handleComparing = () => setIsComparing(!isComparing);

    const product = useContext(ProductContext);

    const [selectedList, setSelectedList] = useState<Product[]>([]);

    useEffect(() => {
        setSelectedList([product]);
    }, [product]);

    const handleSelect = (product: Product) => {
        const alreadySelected = selectedList.find((p) => p._id === product._id);
        const newList = alreadySelected
            ? selectedList.filter((p) => p._id !== product._id)
            : selectedList.length < 3
            ? [product, ...selectedList]
            : [...selectedList];
        setSelectedList(newList);
    };

    const contextValues = {
        selectedList,
        onSelect: handleSelect,
        isComparing,
        onComparing: handleComparing,
    };

    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
