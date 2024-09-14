import { Product } from "@/src/queries/product/Entities";
import Container from "./Container";

async function fetchProducts(api: string) {
    const response = await fetch(
        `https://cv-eshop.netlify.app/api/product/featured/${api}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const products: Product[] = await response.json();
    return products;
}

const Featured = async () => {
    const topSalesProducts = await fetchProducts("top-sales");
    const popularProducts = await fetchProducts("popular");
    return (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-[5%] lg:px-[8%]">
            <Container title="پرفروش‌‌ترین‌ها" products={topSalesProducts} />
            <Container title="محبوب‌ترین‌ها" products={popularProducts} />
        </div>
    );
};

export const revalidate = 60 * 100;

export default Featured;
