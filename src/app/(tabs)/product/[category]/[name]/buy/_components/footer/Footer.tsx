"use client";
import Large from "./_large/Large";
import Small from "./_small/Small";

const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 z-10 w-full lg:h-20 bg-[#fff5] backdrop-blur-xl ">
            <Small />
            <Large />
        </div>
    );
};

export default Footer;
