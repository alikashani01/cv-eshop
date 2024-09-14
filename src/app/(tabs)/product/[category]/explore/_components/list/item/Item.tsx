import { Product } from "@/src/queries/product/Entities";
import { createContext } from "react";
import Body from "./body/Body";
import Bottom from "./bottom/Bottom";
import Top from "./top/Top";

export const Context = createContext({} as Product);

const Item = ({ product }: { product: Product }) => {
    return (
        <Context.Provider value={product}>
            <div className="relative hover:scale-[1.003] hover:shadow-md shadow-[#d1d1d1aa] transition-all duration-500 ease-in rounded-xl">
                <li className="overflow-hidden h-[440px] bg-second-theme rounded-xl ">
                    <Top />
                    <Body />
                    <Bottom />
                </li>
            </div>
        </Context.Provider>
    );
};

export default Item;
