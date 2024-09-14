"use client";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();
    return (
        <Popover className="relative">
            <PopoverButton>
                <Image width={19} height={19} src="/icons/menu.png" alt="" />
            </PopoverButton>

            <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="absolute -left-6 bottom-6 z-10 mt-2 flex w-[250px] max-w-max px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg shadow-[#ddd] ring-1 ring-gray-100/5 *:font-shabt">
                        <Link
                            className="p-3 px-4 text-[.9rem] border-b border-neutral-100"
                            href={`${pathname}/reviews`}
                        >
                            دیدگاه‌ها
                        </Link>
                        <Link
                            className="p-3 px-4 text-[.9rem] border-b border-neutral-100"
                            href={`${pathname}/questions`}
                        >
                            پرسش‌ها
                        </Link>
                        <Link
                            className="p-3 px-4 text-[.9rem] border-b border-neutral-100"
                            href={`${pathname}/specs`}
                        >
                            مشخصات
                        </Link>

                        <Link
                            className="p-3 px-4 text-[.9rem]"
                            href={`${pathname}/compare`}
                        >
                            مقایسه
                        </Link>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}
