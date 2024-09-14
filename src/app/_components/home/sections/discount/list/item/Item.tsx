import { Product } from "@/src/queries/product/Entities";
import { createContext } from "react";
import Body from "./body/Body";
import Bottom from "./bottom/Bottom";
import Top from "./top/Top";

export const Context = createContext({} as Product);

const Item = ({ product }: { product: Product }) => {
    return (
        <Context.Provider value={product}>
            <li className="overflow-hidden h-[400px] bg-second-theme rounded-xl hover:scale-[1.003] hover:shadow-md shadow-[#d1d1d1aa] transition-all duration-500">
                <Top />
                <Body />
                <Bottom />
            </li>
        </Context.Provider>
    );
};

export default Item;
