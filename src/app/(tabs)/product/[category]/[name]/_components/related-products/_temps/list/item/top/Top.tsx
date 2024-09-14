import ProductQuickView from "@/src/app/_components/product-quick-view/ProductQuickView";
import Save from "@/src/app/_components/Save";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext, useState } from "react";
import { Context } from "../Item";
import MenuContainer from "./Menu";

const Top = () => {
    const product = useContext(Context);
    const { _id, pricing } = product;
    const [open, setOpen] = useState(false);
    const isDiscounted = pricing?.find(
        (price) => price.discount?.value! > 0 && price
    );
    return (
        <>
            <div className="h-12 flex items-center justify-between px-2 pr-4">
                <div className="flex items-center gap-3">
                    <button onClick={() => setOpen(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="#aaa"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </button>
                    <Save id={_id || ""} />
                    <MenuContainer />
                </div>
                {isDiscounted && (
                    <div className="flex items-center justify-center gap-[2px] w-[35px] h-[35px] rounded-full bg-rose-500">
                        <p className="text-[1rem] tracking-wider pt-[2.9px] text-[#fff]">
                            {convertEngToPer(isDiscounted.discount?.value!)}
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="#fff"
                            className="bi bi-percent mt-[1px]"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                    </div>
                )}
            </div>
            <ProductQuickView
                open={open}
                handleOpen={() => setOpen(!open)}
                product={product}
            />
        </>
    );
};

export default Top;
