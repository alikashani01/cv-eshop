import { Product } from "@/src/queries/product/Entities";
import List from "../list-container/List";

export default async function Education() {
    const response = await fetch(
        `${process.env.API_URL}/product/featured/skill`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products: Product[] = await response.json();
    return (
        <section>
            <div className="px-5 md:px-[8%] mb-2">
                <p className="text-green-500 text-lg lg:text-2xl font-shabmb mb-1">
                    تحصیل و آموزش
                </p>
                <p className="text-[#777]">قدرتمندترین ابزار برای یادگیری</p>
            </div>
            <List products={products} />
        </section>
    );
}

export const revalidate = 60;
