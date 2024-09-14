import { useContext } from "react";
import { Context } from "./Item";

const Header = () => {
    const { product } = useContext(Context);
    return (
        <div className="p-3 pb-2 px-4 flex items-center justify-between">
            {/* <p className="text-left font-sft text-[.8rem] tracking-[1px] text-neutral-600">
                {product?.name.en}
            </p> */}
        </div>
    );
};

export default Header;
