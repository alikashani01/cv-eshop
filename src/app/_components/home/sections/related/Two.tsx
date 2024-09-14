"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Two = () => {
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
    return (
        <div ref={ref} className="relative row-span-1 overflow-hidden">
            <div
                className={`transition-all duration-500
                ${isOpen ? "opacity-0 invisible" : "opacity-1 visible"}
                `}
            >
                <div className="flex items-center justify-center h-[200px] relative *:absolute">
                    <Image
                        width={2000}
                        height={2000}
                        src="/media/app-pen2.png"
                        alt=""
                        className={`transition-all duration-500 ${
                            selectedColor === "white"
                                ? "opacity-1 visible"
                                : "opacity-0 invisible"
                        } !w-full !h-full object-contain p-4 pt-8`}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-[2px] p-4">
                    <p className="text-rose-500 font-sfreg text-xl tracking-wide">
                        Apple Pencil
                    </p>
                    <p className="text-sm text-gray-600 font-shabt">قلم اپل</p>
                </div>

                <div className="flex items-center justify-between p-4">
                    <Link
                        className="p-[6px] px-5 text-sm bg-blue-600 text-white rounded-full"
                        href={``}
                    >
                        خرید
                    </Link>
                </div>
            </div>

            <div
                className={`transition-all duration-500 w-full h-full overflow-y-auto grid grid-cols-1 items-center justify-center gap-4 p-8 py-5 absolute top-0 left-0 z-10 bg-light-theme rounded-2xl *:text-neutral-700 
                    ${isOpen ? "opacity-1 visible" : "opacity-0 invisible"}
                `}
            >
                <div>
                    <p
                        className={`transition-all duration-700 text-rose-500 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-200"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        رویاپردازی کن آن را یادداشت کنید.
                    </p>
                    <p
                        className={`transition-all duration-700 font-shabt mt-2 text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        Apple Pencil استانداردهایی را برای طراحی، یادداشت برداری
                        و علامت گذاری اسناد تنظیم می کند - بصری، دقیق و جادویی.
                        با دقت کامل پیکسلی، تأخیر کم، حساسیت به شیب، و پشتیبانی
                        از رد کف دست، استفاده از مداد اپل فوق‌العاده آسان است و
                        در هنگام الهام آماده است.
                    </p>
                </div>

                <div>
                    <p
                        className={`transition-all duration-700 text-orange-500 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        نسل دوم
                    </p>
                    <p
                        className={`transition-all duration-700 font-shabt mt-2 text-[.92rem] leading-6 ${
                            isOpen
                                ? "opacity-1 visible translate-y-0 delay-700"
                                : "opacity-0 invisible translate-y-5"
                        }`}
                    >
                        Apple Pencil (نسل دوم) دقت کامل پیکسلی و تأخیر کم پیشرو
                        در صنعت را ارائه می دهد و استفاده از آن به آسانی و طبیعی
                        بودن یک مداد است. دارای حساسیت شیب و فشار است، بنابراین
                        می توانید به طور طبیعی با وزن های مختلف خط، سایه های
                        ظریف و طیف گسترده ای از جلوه های هنری بنویسید و نقاشی
                        کنید. قبل از اینکه علامت خود را بسازید، از نشانگر اپل
                        Pencil برای پیش‌نمایش علامت استفاده کنید، و برای تعویض
                        سریع ابزارها، دو ضربه سریع بزنید. Apple Pencil (نسل دوم)
                        به صورت مغناطیسی در کنار iPad شما جفت می شود، شارژ می
                        شود و ذخیره می شود.
                    </p>
                </div>
            </div>

            <button
                className="absolute bottom-4 left-4 z-20 w-[35px] h-[35px] rounded-full bg-[#ddd6]"
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

export default Two;
