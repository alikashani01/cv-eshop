"use client";
import { useContext } from "react";
import { Context } from "../../../_Context";
import MainProduct from "./MainProduct";
import CompareProducts from "./CompareProducts";

const CompareList = () => {
    const { isComparing } = useContext(Context);
    return (
        isComparing && (
            <div className="flex pb-20 *:flex-1 *:flex-grow *:py-4">
                <MainProduct />
                <CompareProducts />
            </div>
        )
    );
};

export default CompareList;
