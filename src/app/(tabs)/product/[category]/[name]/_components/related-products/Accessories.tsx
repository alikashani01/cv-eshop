import useFetchAccessoriesList from "@/src/queries/product/useFetchAccessoryList";
import { useParams } from "next/navigation";
import Container from "./_temps/Container";
import { useContext } from "react";
import { ProductContext } from "../../_Context";

const Accessories = () => {
    const { _id } = useContext(ProductContext);
    const { data: products } = useFetchAccessoriesList(_id!);
    return (
        products?.length! > 0 && (
            <Container title="لوازم جانبی مناسب" products={products || []} />
        )
    );
};

export default Accessories;
