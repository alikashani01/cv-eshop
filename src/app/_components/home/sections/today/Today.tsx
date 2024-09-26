import { Product } from "@/src/queries/product/Entities";
import ContextProvider from "./_Context";
import LargeScreen from "./large-screen/LargeScreen";
import SmallScreen from "./small-screen/SmallScreen";

export default async function Today() {
    const response = await fetch(
        `https://cv-eshop.netlify.app/api/product/featured/today`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products: Product[] = await response.json();
    return (
        <section className="mt-3">
            <ContextProvider>
                <SmallScreen products={products} />
                <LargeScreen products={products} />
            </ContextProvider>
        </section>
    );
}

export const revalidate = 60;
