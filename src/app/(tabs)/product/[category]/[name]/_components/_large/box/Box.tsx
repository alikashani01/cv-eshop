import { useContext } from "react";
import { ProductContext } from "../../../_Context";
import Item from "./Item";

const Box = () => {
    const { box } = useContext(ProductContext);
    return (
        box?.length! > 0 && (
            <div
            //  className="h-[280px]"
            >
                <p className="h-12 flex items-center justify-center p-3">
                    محتوای جعبه
                </p>
                <ul className="flex items-center gap-[5%] px-[5%]">
                    {box?.map((item, index) => (
                        <li key={index}>
                            <Item item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
};

export default Box;
