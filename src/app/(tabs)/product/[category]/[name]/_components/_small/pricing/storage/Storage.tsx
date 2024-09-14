import { Pricing } from "@/src/queries/product/Entities";
import Capacity from "./Capacity";
import Prices from "./Prices";

const Storage = ({ price }: { price: Pricing }) => {
    return (
        <div className="flex items-center justify-between gap-2 px-6 *:flex *:items-center *:flex-[3]">
            <Capacity price={price} />
            <Prices price={price} />
        </div>
    );
};

export default Storage;
