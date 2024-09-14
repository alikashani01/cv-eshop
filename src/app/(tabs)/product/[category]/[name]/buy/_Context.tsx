"use client";

import useBagStore from "@/src/queries/order/bag/store";
import { Color, Item, Pricing } from "@/src/queries/order/Entities";
import { Product } from "@/src/queries/product/Entities";
import useFetchProductDetails from "@/src/queries/product/useFetchDetails";
import { useParams } from "next/navigation";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type Data = {
    color: Color;
    price: Pricing;
    quantity: number;
};

export type IContext = {
    data: Data;
    onColor: (color: Color) => void;
    onPrice: (price: Pricing) => void;
    onIncrement: () => void;
    onDecrement: () => void;
    isPending: boolean;
    handleIncrement: () => void;
    handleDecrement: () => void;
    itemExists: Item | undefined;
    product: Product | undefined;
    onAddItem: () => void;
    discountedPrice: () => number;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState({
        color: {
            fa: "",
            en: "",
            code: "",
        },
        price: {
            value: 0,
            discount: 0,
            countInStock: 0,
            storage: {
                capacity: "",
                unit: "",
            },
        },
        quantity: 1,
    });

    const { name } = useParams<{ name: string }>();
    const { data: product, isPending } = useFetchProductDetails(name);

    const handleColor = (color: Color) =>
        setData({
            ...data,
            color,
        });

    const handlePrice = (price: Pricing) =>
        setData({
            ...data,
            price,
            quantity: 1,
        });

    const increment = () => {
        if (data.quantity < data.price.countInStock)
            setData({
                ...data,
                quantity: data.quantity + 1,
            });
    };
    const decrement = () => {
        if (data.quantity > 1)
            setData({
                ...data,
                quantity: data.quantity - 1,
            });
    };

    const items = useBagStore((s) => s.items);
    const itemExists = items.find((i) => {
        const isIdMatch = i.product === product?._id;
        const isNameMatch = i.name === product?.name.en;
        const isColorMatch = i.color && i.color.fa === data.color.fa;
        const isStorageMatch =
            (!i.storage && !data.price.storage) ||
            (i.storage &&
                data.price.storage &&
                i.storage.capacity === data.price.storage.capacity);

        return isIdMatch && isNameMatch && isColorMatch && isStorageMatch;
    });

    const incrementBag = useBagStore((s) => s.incrementBag);
    const decrementBag = useBagStore((s) => s.decrementBag);

    const handleIncrement = () => {
        itemExists ? incrementBag(itemExists) : increment();
    };
    const handleDecrement = () => {
        itemExists ? decrementBag(itemExists) : decrement();
    };

    const setAdd = useBagStore((s) => s.setAdd);

    const discountedPrice = () => {
        const discountPrice = (data.price.discount / 100) * data.price.value;
        const calculatedPrice = data.price.value - discountPrice;
        return calculatedPrice;
    };

    const handleAddItem = () =>
        setAdd({
            product: product?._id!,
            brand: product?.brand?.fa!,
            name: product?.name?.en!,
            category: product?.category?.en!,
            photo: product?.cover[0] || "",
            color: {
                fa: data.color.fa,
                en: data.color.en,
                code: data.color.code,
            },
            storage: {
                capacity: data.price.storage.capacity || "",
                unit: data.price.storage.unit || "",
            },
            price:
                data.price.discount > 0 ? discountedPrice() : data.price.value,
            discount: data.price.discount,
            quantity: data.quantity,
            countInStock: data.price.countInStock,
        });

    useEffect(() => {
        if (product)
            setData({
                ...data,
                color: product.colors[0],
                price: {
                    value: product.pricing?.[0].value || 0,
                    discount: product.pricing?.[0].discount?.value || 0,
                    countInStock: product.pricing?.[0].countInStock || 0,
                    storage: {
                        capacity: product.pricing?.[0].storage?.capacity || "",
                        unit: product.pricing?.[0].storage?.unit || "",
                    },
                },
            });
    }, [product]);

    const contextValues = {
        data,
        onColor: handleColor,
        onPrice: handlePrice,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        isPending,
        handleIncrement,
        handleDecrement,
        itemExists,
        product,
        onAddItem: handleAddItem,
        discountedPrice,
    };
    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
