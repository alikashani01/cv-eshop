import { Item as IItem } from "@/src/queries/order/Entities";
import { createContext } from "react";
import Name from "./Name";
import Photo from "./Photo";
import Price from "./Price";
import Bottom from "./bottom/Bottom";
import Options from "./options/Options";
import Remove from "./Remove";

export const Context = createContext({} as IItem);

const Item = ({ item }: { item: IItem }) => {
    return (
        <li className="relative border-b border-neutral-200">
            <Context.Provider value={item}>
                <Remove />
                <div className="flex items-center gap-4 p-2 px-4">
                    <Photo />
                    <div>
                        <Price />
                        <Options />
                    </div>
                </div>
                <Name />
                <Bottom />
            </Context.Provider>
        </li>
    );
};

export default Item;
