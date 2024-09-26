"use client";
import { Product } from "@/src/queries/product/Entities";
import Five from "./Five";
import Four from "./Four";
import One from "./One";
import Three from "./Three";
import Two from "./Two";

const LargeScreen = ({ products }: { products: Product[] }) => {
    return (
        <div className="hidden lg:grid *:bg-second-theme *:rounded-2xl *:shadow-sm *:shadow-[#aaa2] grid-cols-2 grid-rows-3 grid-flow-row gap-4 px-4 md:px-[5%] lg:px-[8%]">
            <One product={products[0]} />

            <Two product={products[1]} />

            <Three product={products[2]} />

            <Four product={products[3]} />

            <Five product={products[4]} />
        </div>
    );
};

export default LargeScreen;
