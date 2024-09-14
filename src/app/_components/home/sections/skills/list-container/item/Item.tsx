import { Product } from "@/src/queries/product/Entities";
import convertProductFaName from "@/src/utils/convertProductFaName";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Details from "../Details";
import Footer from "./footer/Footer";
import Name from "./Name";

gsap.registerPlugin(ScrollTrigger);

const Item = ({ product }: { product: Product }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <li className="transition-all duration-700 h-full relative overflow-hidden bg-second-theme shadow-sm hover:shadow-md hover:scale-[1.01] rounded-xl">
                <>
                    <Link
                        href={`/product/${
                            product.category.en
                        }/${convertProductFaName(product.name.fa)}`}
                        className={`
                            ${open ? "scale-90 opacity-0" : ""}
                            transition duration-300
                            flex-col px-4 h-[436px]
                            
                        `}
                    >
                        <Name
                            nameEn={product.name.en}
                            nameFa={product.name.fa}
                        />
                        <Image
                            width={1000}
                            height={1000}
                            src={product.cover[0]}
                            alt=""
                            className="min-w-[100%] max-width-[100%] h-[calc(100%-30px)] object-contain p-4"
                        />
                    </Link>
                    <Details open={open} />
                    <Footer open={open} onOpen={handleOpen} product={product} />
                </>
            </li>
        </>
    );
};

export default Item;
