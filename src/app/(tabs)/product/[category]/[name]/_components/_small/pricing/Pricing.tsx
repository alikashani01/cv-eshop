import { useContext } from "react";
import { ProductContext } from "../../../_Context";
import Price from "./Price";
import Storage from "./storage/Storage";

const Pricing = () => {
    const { pricing } = useContext(ProductContext);
    return (
        <div>
            {pricing.map((price, index) => (
                <li
                    key={index}
                    className="h-[75px] flex items-center justify-center border-b border-neutral-200 last:border-none py-4 *:w-full"
                >
                    {price.storage?.capacity ? (
                        <Storage price={price} />
                    ) : (
                        <Price price={price.value} />
                    )}
                </li>
            ))}
        </div>
    );
};

export default Pricing;
