import { Item } from "@/src/queries/order/Entities";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Image from "next/image";

const Items = ({ items }: { items: Item[] }) => {
    return (
        <ul className="bg-second-theme rounded-2xl p-4 mt-4 lg:m-0">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="border-b border-neutral-200 last:border-none py-2 text-left"
                >
                    <Image
                        width={1000}
                        height={1000}
                        src={item.photo}
                        alt=""
                        className="w-[100%] h-[80px] object-contain"
                    />

                    <p className="text-[.9rem] text-center mt-2  font-sfl tracking-[1px]">
                        {item.name}
                    </p>
                    <div className="flex items-center justify-between mt-2 *:flex-1 *:bg-nu-70border-neutral-700 *:h-8 *:rounded-xl gap-2 *:flex *:items-center *:justify-center">
                        <div className="flex items-center gap-2">
                            <span
                                style={{ background: item.color.code }}
                                className="w-4 h-4 rounded-full block border border-neutral-500"
                            ></span>
                            <p className="text-[.8rem] text-right">
                                {item.color.fa}
                            </p>
                        </div>
                        {item.storage?.capacity && (
                            <div className="flex items-center gap-1 pt-[2px]">
                                <p className="tracking-[2px] pt-[.6px] text-[1.05rem]">
                                    {item.storage?.capacity}
                                </p>
                                <p className="text-[.75rem] text-[#888] font-shabmt pt-[.8px]">
                                    {item.storage?.unit}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="bg-nu-70border-neutral-700 rounded-xl mt-2 h-8 flex items-center justify-between *:flex-1 *:flex *:items-center *:justify-center">
                        <div className="flex items-center gap-1 border-l border-neutral-200">
                            <p>{convertEngToPer(item.quantity)}</p>
                            <p className="text-[.7rem] text-[#999] font-shabmt">
                                عدد
                            </p>
                        </div>
                        <div className="gap-1">
                            <p className="text-sm tracking-[2px]">
                                {item.price.toLocaleString("fa")}
                            </p>
                            <p className="text-[.7rem] text-[#999] font-shabmt">
                                تومان
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Items;
