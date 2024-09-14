import { Product } from "@/src/queries/product/Entities";
import ContextProvider from "./_Context";
import LargeScreen from "./large-screen/LargeScreen";
import SmallScreen from "./small-screen/SmallScreen";

export default async function Today() {
    const response = await fetch(
        `http://localhost:3000/api/product/featured/today`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products: Product[] = await response.json();
    return (
        <section className="mt-16">
            <ContextProvider>
                <SmallScreen products={products} />
                <LargeScreen products={products} />
            </ContextProvider>
        </section>
    );
}

export const revalidate = 60;
