"use client";
import convertProductFaName from "@/src/utils/convertProductFaName";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ThreeLarge = () => {
    const [selectedColor, setSelectedColor] = useState("white");
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (el) {
            document.addEventListener("scroll", () => {
                const windowHeight = window.innerHeight;
                const elTop = el.getBoundingClientRect().top;
                if (elTop <= windowHeight - 50) {
                    el.style.transform = "translateY(0)";
                    el.style.transition = "1s ease";
                } else {
                    el.style.transform = "translateY(50px)";
                    el.style.transition = "0s ease";
                }
            });
        }
    }, [ref.current]);
    const Color = ({ color }: { color: string }) => (
        <button
            style={{ background: color }}
            className={`transition duration-500 ${
                selectedColor === color ? "border-blue-500" : "border-gray-500"
            } w-10 h-10 rounded-full border-2`}
            onClick={() => setSelectedColor(color)}
        ></button>
    );
    return (
        <div
            ref={ref}
            className="hidden relative row-span-1 overflow-hidden md:flex items-center justify-center"
        >
            <div
                className={`flex items-center justify-between h-full w-1/2 relative *:absolute
                ${
                    isOpen ? "opacity-0 invisible" : "opacity-1 visible"
                } transition-all duration-500  
                `}
            >
                <Image
                    width={2000}
                    height={2000}
                    src="https://www.apple.com/v/ipad-keyboards/l/images/overview/magic_keyboard_white__bw5nfooq07le_large_2x.png"
                    alt=""
                    className={`transition-all duration-500 ${
                        selectedColor === "white"
                            ? "opacity-1 visible"
                            : "opacity-0 invisible"
                    } !w-full !h-full object-contain`}
                />
                <Image
                    width={2000}
                    height={2000}
                    src="https://www.apple.com/v/ipad-keyboards/l/images/overview/magic_keyboard_black__b0zgmcf9vkgi_large_2x.png"
                    alt=""
                    className={`transition-all duration-500 ${
                        selectedColor === "black"
                            ? "opacity-1 visible"
                            : "opacity-0 invisible"
                    } !w-full !h-full object-contain`}
                />
            </div>

            <div
                className={`flex-grow flex flex-col items-center justify-between *:w-full h-full px-4
                ${
                    isOpen ? "opacity-0 invisible" : "opacity-1 visible"
                } transition-all duration-500
                `}
            >
                <div className="flex flex-col items-center justify-center gap-[2px] p-4 pt-10">
                    <p className="text-rose-500 text-center font-sfreg text-xl tracking-wide">
                        Magic Keyboard for iPad Pro 13‑inch (M4)
                    </p>

                    <p className="text-sm text-gray-600 font-shabt mt-1">
                        صفحه کلید جادویی iPad Pro 13 اینچی
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 p-4">
                    <Color color="white" />
                    <Color color="black" />
                </div>

                <div className="flex items-center justify-between p-4">
                    <Link
                        className="p-[6px] px-5 text-sm bg-blue-600 text-white rounded-full"
                        href={`product/tablet/${convertProductFaName(
                            "صفحه کلید جادویی برای iPad Pro 13 اینچی (M4) انگلیسی ایالات متحده"
                        )}`}
                    >
                        خرید
                    </Link>
                </div>
            </div>

            <div
                className={`transition-all duration-500 w-full h-full overflow-y-auto grid grid-cols-1 items-center content-evenly gap-6 p-6 absolute top-0 left-0 z-10 bg-light-theme rounded-2xl 
                    ${isOpen ? "opacity-1 visible" : "opacity-0 invisible"}
                `}
            >
                <div>
                    <p
                        className={`transition-all duration-700 text-neutral-700 mt-2 font-shabt text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        صفحه کلید جادویی برای آیپد پرو تجربه تایپ و ترک پد شگفت
                        انگیزی را در طراحی جدید و قابل حمل و شیک به همراه تکیه
                        گاه کف دست آلومینیومی ارائه می دهد. این صفحه‌کلید دارای
                        یک ردیف عملکرد 14 کلیدی برای دسترسی سریع به روشنایی
                        صفحه، کنترل‌های صدا و سایر ویژگی‌ها و یک رابط USB-C برای
                        شارژ عبوری است. طراحی کنسول شناور به آرامی با چندین
                        زاویه دید تنظیم می شود.
                    </p>
                </div>
                <div>
                    <p
                        className={`transition-all duration-700 text-neutral-700 mt-2 font-shabt text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        یک پد لمسی بزرگتر جدید با بازخورد لمسی برای کارهای دقیقی
                        مانند ویرایش صفحه گسترده و انتخاب متن، یا به سادگی
                        پیمایش iPad خود با حرکات چند لمسی بصری و آشنا، عالی است.
                        و یک پوشش بیرونی بادوام از جلو و پشت محافظت می کند که
                        برای بردن iPad Pro در هر مکانی عالی است.
                    </p>
                </div>
            </div>

            <button
                className="absolute bottom-4 left-6 z-20 w-[35px] h-[35px] rounded-full bg-[#ddd6]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    width={18}
                    height={18}
                    src="/icons/plus/gray.png"
                    alt=""
                    className={`transition-all duration-500 ${
                        isOpen ? "rotate-[45deg]" : ""
                    }`}
                />
            </button>
        </div>
    );
};
export default ThreeLarge;
