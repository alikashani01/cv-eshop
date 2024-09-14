import { Product } from "@/src/queries/product/Entities";
import Header from "./Header";
import List from "./list/List";

interface Props {
    title: string;
    products: Product[];
}

const Container = ({ title, products }: Props) => {
    return (
        <div className="!bg-[unset] mt-8 lg:mt-20">
            <Header title={title} />
            <List products={products} />
        </div>
    );
};

export default Container;
