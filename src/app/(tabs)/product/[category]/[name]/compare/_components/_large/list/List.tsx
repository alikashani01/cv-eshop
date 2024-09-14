"use client";
import { useFetchCompareList } from "@/src/queries/product/useFetchCompareList";
import { CircularProgress } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import Header from "./header/Header";
import Item from "./Item";

const List = () => {
    const query = useSearchParams().get("query");
    const { id } = useParams<{ id: string }>();
    const { data: products, isPending } = useFetchCompareList(id);
    return (
        <div className="sticky top-4 min-w-[200px] max-w-[200px] lg:min-w-[280px] lg:max-w-[280px] h-[calc(100vh-32px)] bg-second-theme rounded-xl overflow-y-auto">
            <Header />
            <ul className="flex flex-col items-center">
                {isPending ? (
                    <CircularProgress size={16} />
                ) : query ? (
                    products?.map(
                        (product) =>
                            (product.name.en
                                .toLowerCase()
                                .includes(query.toLowerCase()) ||
                                product.name.fa
                                    .toLowerCase()
                                    .includes(query.toLowerCase())) && (
                                <Item key={product._id} product={product} />
                            )
                    )
                ) : (
                    products?.map((product) => (
                        <Item key={product._id} product={product} />
                    ))
                )}
            </ul>
        </div>
    );
};

export default List;
