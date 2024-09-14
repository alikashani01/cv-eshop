"use client";

const Footer = ({ handleOpen }: { handleOpen: () => void }) => {
    return (
        <div className="w-full h-12 flex items-center justify-center fixed bottom-0 left-0 z-20">
            <button onClick={handleOpen} className="p-2">
                <span className="rotate-[-15deg] mr-[5px] block w-[26px] h-[5px] rounded-[10px] bg-[#555]"></span>
                <span className="rotate-[15deg] mr-[-5px] block w-[26px] h-[5px] rounded-[10px] bg-[#555]"></span>
            </button>
        </div>
    );
};

export default Footer;
