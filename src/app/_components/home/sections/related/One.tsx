"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const One = () => {
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
                    el.style.transition = "1s ease";
                }
            });
        }
    }, [ref.current]);
    const Color = ({ color }: { color: string }) => (
        <button
            style={{ background: color }}
            className={`transition duration-500 ${
                selectedColor === color ? "border-blue" : "border-gray-500"
            } w-10 h-10 rounded-full border-2`}
            onClick={() => setSelectedColor(color)}
        ></button>
    );
    return (
        <div ref={ref} className="relative row-span-2 overflow-hidden">
            <div
                className={`h-full flex flex-col items-center justify-around *:w-full transition-all duration-500 
                ${isOpen ? "opacity-0 invisible" : "opacity-1 visible"}    
                `}
            >
                <div className="flex items-center justify-center h-[300px] relative *:absolute">
                    <Image
                        width={2000}
                        height={2000}
                        src="/media/ipad/ipad-white.png"
                        alt=""
                        className={`transition-all duration-500 ${
                            selectedColor === "white"
                                ? "opacity-1 visible"
                                : "opacity-0 invisible"
                        } !w-full !h-full object-contain p-4 pt-8`}
                    />
                    <Image
                        width={2000}
                        height={2000}
                        src="/media/ipad/ipad-black.png"
                        alt=""
                        className={`transition-all duration-500 ${
                            selectedColor === "black"
                                ? "opacity-1 visible"
                                : "opacity-0 invisible"
                        } w-full h-full object-contain p-4 pt-8`}
                    />
                </div>
                <div className="flex items-center justify-center gap-4 p-4">
                    <Color color="white" />
                    <Color color="black" />
                </div>
                <div className="flex flex-col items-center justify-center gap-[2px] p-4">
                    <p className="text-rose-500 font-sfreg text-xl tracking-wide">
                        iPad Pro 14“ M4
                    </p>
                    <p className="text-sm text-gray-600 font-shabt">
                        اپل آی‌پد پرو ۱۴ اینچ با چیپ <span>M4</span>
                    </p>
                </div>
                <div className="flex items-center justify-between p-4 px-6 md:px-[5%] lg:px-[8%]">
                    <Link
                        className="p-[6px] px-5 text-sm bg-blue-600 text-white rounded-full"
                        href={``}
                    >
                        خرید
                    </Link>
                </div>
            </div>
            <div
                className={`transition-all duration-500 w-full h-full overflow-y-auto grid grid-cols-1 lg:content-evenly gap-6 p-6 absolute top-0 left-0 z-10 bg-second-theme rounded-2xl 
                    ${isOpen ? "opacity-1 visible" : "opacity-0 invisible"}
                `}
            >
                <div>
                    <p
                        className={`transition-all duration-700 text-green-500 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-200"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        طراحی شده برای ایجاد تغییر.
                    </p>
                    <p
                        className={`transition-all duration-700 text-neutral-700 mt-2 font-shabt text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        از استفاده بیشتر از مواد بازیافتی که تأثیرات زیست‌محیطی
                        را به حداقل می‌رساند، تا حفاظت از حریم خصوصی که کنترل
                        بیشتری بر داده‌های شما می‌دهد، تا ایجاد ویژگی‌های داخلی
                        که آیپد را برای همه قابل دسترس می‌کند.
                    </p>
                </div>

                <div>
                    <p
                        className={`transition-all duration-700 text-sky-500 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-200"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        پیشرفته ترین نمایشگر دنیا
                    </p>
                    <p
                        className={`transition-all duration-700 text-neutral-700 mt-2 font-shabt text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        نمایشگر جدید Ultra Retina XDR فناوری پیشگامانه OLED پشت
                        سر هم را معرفی می کند. روشنایی فوق‌العاده، کنتراست
                        فوق‌العاده دقیق، و فناوری‌های پیشرفته مانند ProMotion و
                        True Tone تجربه بصری شگفت‌انگیزی را به شما می‌دهند. و می
                        توانید از Reference Mode برای گردش کار دقیق رنگ استفاده
                        کنید.
                    </p>
                </div>

                <div>
                    <p
                        className={`rtl transition-all duration-700 text-fuchsia-600 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        میکروفون ها. دوربین ها. اکشن.
                    </p>
                    <p
                        className={`transition-all duration-700 text-neutral-700 mt-2 font-shabt text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        با اسکنر LiDAR، میکروفون های با کیفیت استودیویی و چهار
                        بلندگو، همه را در یک دستگاه با یک سیستم دوربین حرفه ای
                        عکس بگیرید، ویرایش کنید و به اشتراک بگذارید. ویدیوی 4K
                        ProRes ضبط کنید، با دوربین جلوی افقی جدید تماس ویدیویی
                        بگیرید، و اسکن‌های بسیار بهتری از اسناد را که توسط هوش
                        مصنوعی بهبود یافته است، بگیرید.
                    </p>
                </div>
            </div>
            <button
                className="absolute bottom-4 lg:bottom-10 left-6 lg:left-10 z-20 w-[35px] h-[35px] rounded-full bg-[#ddd6]"
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

export default One;
