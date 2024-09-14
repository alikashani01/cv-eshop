import { Address } from "@/src/queries/user/Entities";
import Image from "next/image";
import MenuContainer from "./menu/Menu";

const Item = ({ address }: { address: Address }) => {
    return (
        <li className="w-full flex items-center justify-between py-3 px-4 rounded-2xl bg-second-theme border-b border-neutral-200 last:border-none">
            <div className="w-[calc(100%-20px)] flex items-center gap-1">
                <MenuContainer
                    id={address._id!}
                    isDefault={address.isDefault || false}
                />
                <div className="w-[calc(100%-40px)]">
                    <p>{address.title}</p>
                    <div className="w-full *:overflow-hidden *:text-ellipsis *:text-nowrap *:text-[.78rem] *:font-shabt *:text-neutral-500">
                        <p>{address.city}</p>
                        <p>{address.street}</p>
                    </div>
                </div>
            </div>
            {address.isDefault && (
                <Image
                    width={17}
                    height={17}
                    src="/icons/check.png"
                    alt=""
                    objectFit="contain"
                    priority
                    className="min-w-5"
                />
            )}
        </li>
    );
};

export default Item;
