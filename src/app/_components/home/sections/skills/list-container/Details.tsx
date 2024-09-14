const Details = ({ open }: { open: boolean }) => {
    return (
        <div
            className={`
                absolute inset-0 *:leading-8
                h-[calc(100%)] p-6 overflow-y-auto no-scrollbar
                ${
                    open
                        ? "scale-100 opacity-1 visible transition duration-300"
                        : "scale-90 opacity-0 invisible"
                }
            `}
        >
            <p
                className={`
                    p-2 py-4 text-sm leading-8
                    ${
                        open
                            ? "opacity-1 text-neutral-600 translate-y-0 transition duration-700 delay-100"
                            : "opacity-0 text-neutral-100 translate-y-[30px]"
                    }`}
            >
                دستگاه خود را با اتصال لایتنینگ به دستگاه دارای USB-C یا
                Thunderbolt 3 (USB-C) برای همگام‌سازی و شارژ، یا به iPad دارای
                USB-C برای شارژ متصل کنید.
            </p>
            <p
                className={`
                    p-2 py-4 text-sm leading-8
                    ${
                        open
                            ? "opacity-1 text-neutral-600 translate-y-0 transition duration-700 delay-100"
                            : "opacity-0 text-[#282828] translate-y-[30px]"
                    }`}
            >
                همچنین می‌توانید از این کابل با آداپتور برق 18 وات، 20 وات، 29
                وات، 30 وات، 61 وات، 87 وات یا 96 وات USB-C Apple خود برای شارژ
                دستگاه iOS خود و حتی استفاده از ویژگی شارژ سریع در مدل‌های
                انتخابی آیفون و آی‌پد استفاده کنید.
            </p>
            <p
                className={`
                    p-2 py-4 text-sm leading-8
                    ${
                        open
                            ? "opacity-1 text-neutral-600 translate-y-0 transition duration-700 delay-100"
                            : "opacity-0 text-neutral-100 translate-y-[30px]"
                    }`}
            >
                همچنین می‌توانید از این کابل با آداپتور برق 18 وات، 20 وات، 29
                وات، 30 وات، 61 وات، 87 وات یا 96 وات USB-C Apple خود برای شارژ
                دستگاه iOS خود و حتی استفاده از ویژگی شارژ سریع در مدل‌های
                انتخابی آیفون و آی‌پد استفاده کنید.
            </p>
        </div>
    );
};

export default Details;
