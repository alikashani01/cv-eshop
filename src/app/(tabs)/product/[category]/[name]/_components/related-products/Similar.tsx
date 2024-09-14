import useFetchSimilarList from "@/src/queries/product/useFetchSimilarList";
import { useContext } from "react";
import { ProductContext } from "../../_Context";
import Container from "./_temps/Container";

const Similar = () => {
    const { _id } = useContext(ProductContext);
    const { data: products } = useFetchSimilarList(_id!);
    return <Container title="محصولات مشابه" products={products || []} />;
};

export default Similar;
