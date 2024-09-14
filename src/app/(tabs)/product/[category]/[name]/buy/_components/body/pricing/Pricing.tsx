"use client";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";
import { Context } from "../../../_Context";
import Price from "./Price";
import Storage from "./storage/Storage";

const Pricing = () => {
    const {
        onPrice,
        data: {
            price: { value },
        },
    } = useContext(Context);

    const { pricing } = useContext(ProductContext);

    const storageExists = pricing.find((p) => p.storage?.capacity);

    return (
        <div className="max-w-[400px] mt-12 mx-auto">
            {storageExists && (
                <p className="mb-2 mr-1 text-neutral-700">
                    فضای ذخیره‌سازی مورد نیازتو انتخاب کن
                </p>
            )}
            {pricing.map((price, index) => (
                <li
                    key={index}
                    className={`border rounded-2xl transition-all duration-500 bg-second-theme
                        ${
                            price.value === value
                                ? "border-blue-500"
                                : "border-neutral-200"
                        } 
                        flex items-center justify-center h-20 mb-4 *:w-full`}
                    onClick={() =>
                        onPrice({
                            value: price.value,
                            discount: price.discount?.value || 0,
                            countInStock: price.countInStock || 0,
                            storage: {
                                capacity: price.storage?.capacity || "",
                                unit: price.storage?.unit || "",
                            },
                        })
                    }
                >
                    {price.storage?.capacity ? (
                        <Storage price={price} />
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <Price price={price.value} />
                        </div>
                    )}
                </li>
            ))}
        </div>
    );
};

export default Pricing;
