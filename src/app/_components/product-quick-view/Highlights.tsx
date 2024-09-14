import { useContext } from "react";
import { Context } from "./ProductQuickView";

const Highlights = () => {
    const { highlights } = useContext(Context);
    return (
        highlights?.length! > 0 && (
            <ul className="py-2 pb-4 px-4">
                {highlights?.map((highlight, index) => (
                    <li
                        key={index}
                        className="flex py-3 border-b border-neutral-100"
                    >
                        <p className="text-[.9rem] text-neutral-700 leading-7">
                            {highlight}
                        </p>
                    </li>
                ))}
            </ul>
        )
    );
};

export default Highlights;
