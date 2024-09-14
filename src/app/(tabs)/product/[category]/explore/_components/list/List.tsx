"use client";
import useFetchProducts from "@/src/queries/product/useFetchList";
import { useParams, useSearchParams } from "next/navigation";
import Item from "./item/Item";
import Loading from "./Loading";
import convertCategory from "@/src/utils/convertCategory";

const List = ({ isCollpased }: { isCollpased?: boolean }) => {
    const { category } = useParams<{ category: string }>();
    const searchParams = useSearchParams();
    const sortOrder = searchParams.get("sort") || "جدیدترین";
    const brands = searchParams.getAll("brand");
    const discount = searchParams.get("discount") || "false";
    const colors = searchParams.getAll("color");
    const chipsets = searchParams.getAll("chipset");
    const cpu = searchParams.getAll("cpu");
    const applications = searchParams.getAll("application");

    const queries = {
        category,
        discount,
        brands: brands,
        colors: colors,
        chipsets,
        cpu,
        applications,
    };

    const { isPending, data: products } = useFetchProducts(sortOrder, queries);

    return isPending ? (
        <Loading />
    ) : (
        <ul
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pb-16 pt-4 px-4 ${
                isCollpased
                    ? "min-[1250px]:grid-cols-3 lg:grid-cols-3"
                    : "min-[1250px]:grid-cols-3"
            } `}
        >
            {products?.map((product) => (
                <Item key={product._id} product={product} />
            ))}
        </ul>
    );
};

export default List;
