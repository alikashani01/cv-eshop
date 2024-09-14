"use client";
import { useFetchCompareList } from "@/src/queries/product/useFetchCompareList";
import { CircularProgress } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import Header from "./header/Header";
import Item from "./Item";
import { useContext } from "react";
import { ProductContext } from "../../../_Context";
import { Context } from "../../_Context";

const List = () => {
    const query = useSearchParams().get("query");
    const { _id } = useContext(ProductContext);
    const { isComparing } = useContext(Context);
    const { data: products, isPending } = useFetchCompareList(_id!);
    return (
        !isComparing && (
            <div className="lg:sticky top-4 w-full lg:min-w-[280px] lg:max-w-[280px] lg:h-[calc(100vh-32px)] bg-second-theme lg:rounded-xl overflow-y-auto">
                <Header />
                <ul className="flex flex-col items-center">
                    {isPending ? (
                        <CircularProgress
                            size={16}
                            sx={{ marginTop: "20px" }}
                        />
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
        )
    );
};

export default List;
