"use client";
import { useContext } from "react";
import { Context } from "../ProductQuickView";
import DiscountedPrice from "./DiscountedPrice";
import Price from "./Price";
import Storage from "./Storage";

const Pricing = () => {
    const { pricing } = useContext(Context);
    return (
        <ul className="w-full flex flex-wrap items-center justify-center">
            {pricing?.map((price, index) => (
                <li
                    key={index}
                    className="w-[300px] h-[90px] flex-grow flex items-center justify-between gap-4 transition duration-300 border-b border-neutral-100 border-e-2 md:border-e-0 px-4 pr-6"
                >
                    {price.storage?.capacity ? (
                        <div className="flex items-center justify-between w-full">
                            <Storage
                                capacity={price.storage?.capacity || ""}
                                unit={price.storage?.unit || ""}
                            />

                            <div className="flex flex-col items-end justify-center">
                                <div className="w-full pl-4 flex flex-col items-end">
                                    {price.discount?.value! > 0 ? (
                                        <DiscountedPrice
                                            price={price.value}
                                            discount={
                                                price.discount?.value || 0
                                            }
                                        />
                                    ) : (
                                        <Price price={price.value} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center w-full">
                            {price.discount?.value! > 0 ? (
                                <DiscountedPrice
                                    price={price.value}
                                    discount={price.discount?.value || 0}
                                />
                            ) : (
                                <Price price={price.value} />
                            )}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Pricing;
