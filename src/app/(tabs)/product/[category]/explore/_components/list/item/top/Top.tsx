import Save from "@/src/app/_components/Save";
import ProductQuickView from "@/src/app/_components/product-quick-view/ProductQuickView";
import { useContext, useState } from "react";
import { Context } from "../Item";
import DiscountBadge from "./DiscountBadge";
import MenuContainer from "./Menu";

const Top = () => {
    const product = useContext(Context);
    const { _id } = product;
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="h-12 flex items-center justify-between px-2 pr-4">
                <div className="flex items-center gap-4">
                    <MenuContainer />

                    <Save id={_id || ""} />

                    <button onClick={() => setOpen(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="#888"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </button>
                </div>
                <DiscountBadge />
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
