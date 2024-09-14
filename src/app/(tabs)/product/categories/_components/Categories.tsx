import Image from "next/image";
import Category from "./Category";

const Categories = () => {
    return (
        <ul className="grid grid-cols-2 gap-4 py-16 px-4">
            <Category title="لپتاپ" href="laptop/explore">
                <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/phase-1/image/upload/v1687255082/My%20Projects/Moon/products/mbp14/sg1_xjzxdl.png"
                    alt="لپتاپ"
                    priority
                    className="w-[100%] h-[90px] p-[2px] object-contain"
                />
            </Category>
            <Category title="موبایل" href="mobile/explore">
                <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/phase-1/image/upload/v1699133116/My%20Projects/Store/shop/iphone-15/blue-t/01_plf9na.png"
                    alt="موبایل"
                    priority
                    className="w-[100%] h-[90px] p-[2px] object-contain"
                />
            </Category>
            <Category title="تبلت" href="tablet/explore">
                <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/phase-1/image/upload/v1687257773/My%20Projects/Moon/products/ipadpro/space-grey/ipad-pro-finish-select-202212-12-9inch-space-gray-wificell_asgyfb.png"
                    alt="تبلت"
                    priority
                    className="w-[100%] h-[90px] p-[2px] object-contain"
                />
            </Category>
            <Category title="واقعیت ترکیبی" href="vr-ar/explore">
                <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/phase-1/image/upload/v1715527242/TECH/Products/Accessories/Apple-Vision-Pro-Transparent-PNG_yqhpiv.png"
                    alt="واقعیت ترکیبی"
                    priority
                    className="w-[100%] h-[90px] p-[2px] object-contain"
                />
            </Category>
            <Category title="سرگرمی" href="entertainment/explore">
                <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/phase-1/image/upload/v1715526134/My%20Projects/Moon/products/ps/ps5_dam8gr.png"
                    alt="سرگرمی"
                    priority
                    className="w-[100%] h-[90px] p-[2px] object-contain"
                />
            </Category>
            <Category title="لوازم جانبی" href="accessory/explore">
                <Image
                    width={100}
                    height={100}
                    src="https://res.cloudinary.com/phase-1/image/upload/v1689731322/My%20Projects/Moon/products/airpodsmax/sky-blue_jeqovo.png"
                    alt="لوازم جانبی"
                    priority
                    className="w-[100%] h-[90px] p-[2px] object-contain"
                />
            </Category>
        </ul>
    );
};

export default Categories;
