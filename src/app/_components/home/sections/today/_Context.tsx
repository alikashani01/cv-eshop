"use client";
import { Product } from "@/src/queries/product/Entities";
import { createContext, PropsWithChildren, useState } from "react";
import ProductQuickView from "../../../product-quick-view/ProductQuickView";

type IContext = {
    open: boolean;
    handleOpen: () => void;
    setProductDetails: (value: Product) => void;
};

export const Context = createContext({} as IContext);

export default function ContextProvider({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    const [productDetails, setProductDetails] = useState({} as Product);
    const handleOpen = () => setOpen(!open);

    const contextValues = {
        open,
        handleOpen,
        setProductDetails,
    };
    return (
        <Context.Provider value={contextValues}>
            {children}
            {productDetails._id && (
                <ProductQuickView
                    product={productDetails}
                    open={open}
                    handleOpen={handleOpen}
                />
            )}
        </Context.Provider>
    );
}
