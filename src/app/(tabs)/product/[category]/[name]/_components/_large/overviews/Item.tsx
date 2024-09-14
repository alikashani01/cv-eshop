import Image from "next/image";
import { useState } from "react";

interface Props {
    overview: { title: string; description: string };
}

const Item = ({ overview }: Props) => {
    const [show, setShow] = useState(false);
    return (
        <li className="h-[420px] flex-1 bg-second-theme rounded-2xl">
            <div
                className={`no-scrollbar ${
                    show ? "overflow-y-auto" : "overflow-y-hidden"
                } h-[360px] relative flex items-center justify-center`}
            >
                <div
                    className={`absolute h-[280px] flex flex-col items-center gap-3 justify-center font-shabb text-xl ${
                        show
                            ? "scale-0 opacity-0 translate-y-[-100%]"
                            : "scale-1 opacity-100 translate-y-[0]"
                    } transition duration-700`}
                >
                    <p className="font-shabb text-xl text-neutral-600">
                        {overview.title}
                    </p>
                </div>
                <p
                    className={`flex items-center justify-center p-4 mt-4 text-center leading-8 ${
                        show
                            ? "translate-y-[0] opacity-100"
                            : "translate-y-[150%] opacity-0"
                    } duration-700 ease-out transition-all`}
                >
                    {overview.description}
                </p>
            </div>
            <div className="w-full flex items-center justify-center h-[60px] bg-[#151515">
                <button
                    className={`transition duration-300 ${
                        show ? "rotate-45" : "rotate-0"
                    } bg-[#e6e6e688] w-[45px] h-[45px] rounded-full`}
                    onClick={() => setShow(!show)}
                >
                    <Image width={20} height={20} src="/icons/add.png" alt="" />
                </button>
            </div>
        </li>
    );
};

export default Item;
