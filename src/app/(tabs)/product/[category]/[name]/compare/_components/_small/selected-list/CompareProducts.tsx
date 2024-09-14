import Image from "next/image";
import { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../../../_Context";
import Part from "../../parts/Part";
import Title from "../../parts/Title";
import Value from "../../parts/Value";

const CompareProducts = () => {
    const { selectedList } = useContext(Context);
    return (
        <div className="w-1/2 relative">
            <Swiper>
                {selectedList?.map((product) => (
                    <SwiperSlide
                        key={product._id}
                        style={{
                            position: "relative",
                            zIndex: 10,
                        }}
                    >
                        <Image
                            width={200}
                            height={250}
                            src={product?.cover[0] || ""}
                            alt=""
                            className="w-full h-32 object-contain"
                        />
                        <p className="sticky top-0 bg-[#f5f5f755] backdrop-blur-xl w-full p-1 block overflow-hidden text-ellipsis text-nowrap text-center font-sft ">
                            {product?.name.en}
                        </p>
                        <div>
                            <Part
                                isExist={
                                    product?.specs.proccessors?.cpu?.model
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="پردازنده مرکزی"
                                    en="CPU"
                                    icon="/icons/product/cpu.png"
                                />
                                <Value
                                    en={product?.specs.proccessors?.cpu?.model!}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.proccessors?.gpu?.model
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="پردازنده گرافیکی"
                                    en="GPU"
                                    icon="/icons/product/gpu.png"
                                />
                                <Value
                                    en={product?.specs.proccessors?.gpu?.model!}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.proccessors?.chipset
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="تراشه"
                                    en="Chipset"
                                    icon="/icons/product/chip.png"
                                />
                                <Value
                                    en={product?.specs.proccessors?.chipset}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.display?.resolution?.hor
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="وضوح تصویر"
                                    icon="/icons/product/display.png"
                                />
                                <Value
                                    fa={`${product?.specs.display?.resolution?.hor} x ${product?.specs.display?.resolution?.ver}`}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.display?.displayType?.en
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="نوع نمایگشر"
                                    icon="/icons/product/display.png"
                                />
                                <Value
                                    en={product?.specs.display?.displayType?.en}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.display?.aspectRatio
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="نسبت تصویر"
                                    icon="/icons/product/display.png"
                                />
                                <Value
                                    en={product?.specs.display?.aspectRatio}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.display?.touchScreen
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="صفحه لمسی"
                                    icon="/icons/product/display.png"
                                />
                                <Value
                                    en={product?.specs.display?.touchScreen}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.display?.ppi ? true : false
                                }
                            >
                                <Title
                                    fa="تعداد پیکسل در هر اینچ"
                                    en="PPI"
                                    icon="/icons/product/display.png"
                                />
                                <Value en={product?.specs.display?.ppi} />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.battery?.batteryType?.en
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="نوع باتری"
                                    en=""
                                    icon="/icons/product/battery.png"
                                />
                                <Value
                                    en={product?.specs.battery?.batteryType?.en}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.battery?.capacity
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="ظرفیت باتری"
                                    en=""
                                    icon="/icons/product/battery.png"
                                />
                                <Value en={product?.specs.battery?.capacity} />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.battery?.chargingTime
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="مدت زمان شارژ"
                                    en=""
                                    icon="/icons/product/battery.png"
                                />
                                <Value
                                    en={product?.specs.battery?.chargingTime}
                                />
                            </Part>
                            <Part
                                isExist={
                                    product?.specs.battery?.fastCharge
                                        ? true
                                        : false
                                }
                            >
                                <Title
                                    fa="شارژ سریع"
                                    en=""
                                    icon="/icons/product/battery.png"
                                />
                                <Value
                                    en={product?.specs.battery?.fastCharge}
                                />
                            </Part>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CompareProducts;
