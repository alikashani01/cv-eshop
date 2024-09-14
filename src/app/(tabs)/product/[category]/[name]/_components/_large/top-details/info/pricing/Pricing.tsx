import { useContext } from "react";
import { ProductContext } from "../../../../../_Context";
import Price from "./Price";
import Storage from "./storage/Storage";

const Pricing = () => {
    const { pricing } = useContext(ProductContext);
    return (
        <div className="flex flex-wrap *:w-[300px] *:flex-grow">
            {pricing.map((price, index) => (
                <li
                    key={index}
                    className="h-20 flex items-center justify-center border-b border-neutral-200 last:border-none py-4 *:w-full"
                >
                    {price.storage?.capacity ? (
                        <Storage price={price} />
                    ) : (
                        <div className="px-4 w-full flex items-center justify-center">
                            <Price price={price.value} />
                        </div>
                    )}
                </li>
            ))}
        </div>
    );
};

export default Pricing;
