import { Product } from "@/src/queries/product/Entities";
import List from "./list/List";

export default async function Discount() {
    const response = await fetch(
        `${process.env.API_URL}/product/featured/discount`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products: Product[] = await response.json();
    return (
        <section className="mt-16">
            <p className="px-5 md:px-[5%] lg:px-[8%] mb-2 mr-1 text-lg lg:text-xl text-rose-500">
                تخفیف‌های امروز
            </p>
            <List products={products} />
        </section>
    );
}

export const revalidate = 60;
