"use client";
import { Product } from "@/src/queries/product/Entities";
import { useMediaQuery } from "@mui/material";
import { createContext } from "react";
import Large from "./_large/Large";
import Small from "./_small/Small";

interface Props {
    product: Product;
    open: boolean;
    handleOpen: () => void;
}

export const Context = createContext({} as Product);

const ProductQuickView = ({ product, open, handleOpen }: Props) => {
    const mediaQuery = useMediaQuery("(min-width:768px)");
    return (
        <Context.Provider value={product}>
            {mediaQuery ? (
                <Large open={open} handleOpen={handleOpen} />
            ) : (
                <Small open={open} handleOpen={handleOpen} />
            )}
        </Context.Provider>
    );
};

export default ProductQuickView;
