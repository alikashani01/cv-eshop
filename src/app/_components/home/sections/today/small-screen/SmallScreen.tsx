"use client";
import { Product } from "@/src/queries/product/Entities";
import Image from "next/image";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import Link from "next/link";
import convertProductFaName from "@/src/utils/convertProductFaName";

const SmallScreen = ({ products }: { products: Product[] }) => {
    return (
        <div className="lg:hidden">
            <p className="mb-2 mr-5 text-neutral-500">برترین‌های امروز</p>
            <Swiper
                id="homeTodaySwiper"
                slidesPerView={"auto"}
                spaceBetween={10}
                modules={[Grid, Navigation]}
                grid={{
                    rows: 2,
                }}
            >
                {products?.map((product) => (
                    <SwiperSlide key={product._id} id="homeTodaySwiperSlider">
                        <Link
                            href={`product/${
                                product.category.en
                            }/${convertProductFaName(
                                product.title?.fa || product.name?.fa
                            )}`}
                            className="flex-col justify-between h-full bg-second-theme rounded-2xl p-4"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={product.cover[0]}
                                alt=""
                                className="h-[120px] object-contain"
                            />
                            <p
                                title={product.name?.en}
                                className="ltr w-full text-sm text-neutral-600 font-sfl text-center text-ellipsis overflow-hidden text-nowrap py-2"
                            >
                                {product.name?.en}
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        style={{ background: color.code }}
                                        className="w-3 h-3 rounded-full border border-gray-400"
                                    />
                                ))}
                            </div>
                            <div className="flex items-center justify-center gap-1 pt-2">
                                <p className="font-shabt text-sm text-neutral-600">
                                    {product.pricing[0].value.toLocaleString(
                                        "fa"
                                    )}
                                </p>
                                <p className="text-[.65rem] text-gray-400 font-shabt">
                                    تومان
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SmallScreen;
