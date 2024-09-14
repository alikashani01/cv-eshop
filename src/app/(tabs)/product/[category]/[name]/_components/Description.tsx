import { useContext } from "react";
import { ProductContext } from "../_Context";

const Description = () => {
    const { description } = useContext(ProductContext);
    return (
        <p className="p-4 px-6 text-[.9rem] text-neutral-600 leading-[30px]">
            {description}
        </p>
    );
};

export default Description;
