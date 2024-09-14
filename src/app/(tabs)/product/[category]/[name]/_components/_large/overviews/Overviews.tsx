import { useContext } from "react";
import { ProductContext } from "../../../_Context";
import Item from "./Item";

const Overviews = () => {
    const { overviews } = useContext(ProductContext);
    return (
        <section className="!bg-[unset]">
            <ul className="flex items-center gap-10">
                {overviews?.map((overview, index) => (
                    <Item key={index} overview={overview} />
                ))}
            </ul>
        </section>
    );
};

export default Overviews;
