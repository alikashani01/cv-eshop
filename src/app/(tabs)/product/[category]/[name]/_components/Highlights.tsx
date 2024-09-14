import { useContext } from "react";
import { ProductContext } from "../_Context";

const Highlights = () => {
    const { highlights } = useContext(ProductContext);
    return (
        highlights?.length! > 0 && (
            <ul className="text-[.95rem] text-neutral-600 leading-7">
                {highlights?.map((item, index) => (
                    <li
                        key={index}
                        className="py-2 lg:py-5 px-6 lg:px-12 border-b border-[#eaeaea] last:border-none"
                    >
                        <p className="text-[.9rem] md:text-[1rem] leading-7">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        )
    );
};

export default Highlights;
