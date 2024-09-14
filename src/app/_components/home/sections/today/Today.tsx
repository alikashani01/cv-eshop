import { Product } from "@/src/queries/product/Entities";
import ContextProvider from "./_Context";
import LargeScreen from "./large-screen/LargeScreen";
import SmallScreen from "./small-screen/SmallScreen";
import { Suspense } from "react";

export default async function Today() {
    const response = await fetch(
        `${process.env.API_URL}/product/featured/today`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products: Product[] = await response.json();
    return (
        <Suspense fallback={<p>...</p>}>
            <section className="mt-16">
                <ContextProvider>
                    <SmallScreen products={products} />
                    <LargeScreen products={products} />
                </ContextProvider>
            </section>
        </Suspense>
    );
}

export const revalidate = 60;
