"use client";

import { Product } from "@/src/queries/product/Entities";
import useFetchProductDetails from "@/src/queries/product/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren, useEffect } from "react";
import useLatestVisitedStore from "../../../(user)/account/latest-visited/store";
import PageLoader from "@/src/app/_components/_modules/Loader";

export const ProductContext = createContext({} as Product);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { name } = useParams<{ name: string }>();

    const { data: product, isPending } = useFetchProductDetails(name);

    const setAdd = useLatestVisitedStore((s) => s.setAdd);

    useEffect(() => {
        if (product) {
            setAdd({
                _id: product._id!,
                cover: product.cover[0]!,
                nameEn: product.name.en!,
                nameFa: product.name.fa!,
                brandEn: product.brand?.en!,
                brandFa: product.brand?.fa!,
                categoryEn: product.category.en!,
                categoryFa: product.category.fa!,
            });
        }
    }, [product]);

    if (isPending) return <PageLoader />;
    if (!product) return null;

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    );
};

export default ContextProvider;
