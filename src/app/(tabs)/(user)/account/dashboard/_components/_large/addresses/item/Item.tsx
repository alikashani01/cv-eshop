import { Address } from "@/src/queries/user/Entities";
import Image from "next/image";
import MenuContainer from "./menu/Menu";

const Item = ({ address }: { address: Address }) => {
    return (
        <li className="flex items-center justify-between py-2 pl-2 border-b border-neutral-200 last:border-none">
            <div className="flex items-center gap-1">
                <MenuContainer
                    id={address._id!}
                    isDefault={address.isDefault || false}
                />
                <p className=" w-full">{address.title}</p>
            </div>
            {address.isDefault && (
                <Image
                    width={17}
                    height={17}
                    src="/icons/check.png"
                    alt=""
                    objectFit="contain"
                    priority
                />
            )}
        </li>
    );
};

export default Item;
