"use client";
import useSearchSuggestions from "@/src/queries/product/search/useSearchSuggestions";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../_Context";
import Spinner from "@/src/app/_components/_modules/spinner/Spinner";

const Suggestions = () => {
    const { keyword } = useContext(Context);
    const { data: products, isPending } = useSearchSuggestions();
    return (
        !keyword && (
            <div className="px-4 py-6 pb-32">
                <p className="text-sm text-neutral-600 mb-2 mr-1">
                    پیشنهاد‌ی‌ها
                </p>
                {isPending && (
                    <div className="flex items-center justify-center">
                        <Spinner />
                    </div>
                )}
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    modules={[Grid]}
                    grid={{ rows: 2 }}
                    style={{
                        height: "320px",
                    }}
                >
                    {products?.map((product, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: "150px",
                                height: "150px",
                            }}
                        >
                            <Link
                                className="flex-col bg-second-theme rounded-lg p-2 gap-3 justify-start h-full w-full"
                                href={`/product/${product._id}/${product.name.fa}`}
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={product.cover[0]}
                                    alt=""
                                    className="w-full h-[80%] object-contain p-2"
                                />
                                <p className="w-full text-ellipsis overflow-hidden text-nowrap ltr font-sft text-center text-neutral-600 text-[.8rem] tracking-[1px]">
                                    {product.name.en}
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    );
};

export default Suggestions;
