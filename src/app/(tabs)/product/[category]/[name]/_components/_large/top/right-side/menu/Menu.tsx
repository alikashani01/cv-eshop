import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import Image from "next/image";
import Item from "./Item";

const items = [
    {
        label: "دیدگاه‌ها",
        href: "reviews",
    },
    {
        label: "پرسش‌ها",
        href: "questions",
    },
    {
        label: "مقایسه",
        href: "compare",
    },
];

export default function Menu() {
    return (
        <Popover className="relative">
            <PopoverButton>
                <Image width={19} height={19} src="/icons/more.png" alt="" />
            </PopoverButton>

            <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="absolute -right-6 top-8 z-10 mt-2 flex w-[250px] max-w-max px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-second-theme text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        {items.map((item) => (
                            <Item key={item.href} item={item} />
                        ))}
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}
