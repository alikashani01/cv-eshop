import Image from "next/image";
import { useContext, useState } from "react";
import { Context } from "../../Context";

const NewPoint = ({ category }: { category: string }) => {
    const [data, setData] = useState("");
    const {
        handleAdvantage,
        handleDisadvantage,
        data: { advantages, disadvantages },
    } = useContext(Context);
    return (
        <form
            className="mb-4 py-2 relative flex items-center"
            onSubmit={(e) => {
                e.preventDefault();
                if (category === "مثبت") handleAdvantage(data);
                else handleDisadvantage(data);
                setData("");
            }}
        >
            <input
                id="newPoint"
                type="text"
                placeholder="نمایشگر شفاف"
                className="w-full h-14 px-6 rounded-xl bg-second-theme border border-neutral-200 placeholder:text-neutral-500 placeholder:font-shabt"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            {data && (
                <button
                    className="absolute left-[20px]"
                    onClick={(e) => {
                        e.preventDefault();
                        if (category === "مثبت") handleAdvantage(data);
                        else handleDisadvantage(data);
                        setData("");
                    }}
                >
                    {category === "مثبت" ? (
                        <>
                            {advantages.includes(data) ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="#ff6666"
                                    className="bi bi-dash"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                </svg>
                            ) : (
                                <Image
                                    width={15}
                                    height={15}
                                    src="/icons/add.png"
                                    alt=""
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {disadvantages.includes(data) ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-dash"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                </svg>
                            ) : (
                                <Image
                                    width={15}
                                    height={15}
                                    src="/icons/add.png"
                                    alt=""
                                />
                            )}
                        </>
                    )}
                </button>
            )}
        </form>
    );
};

export default NewPoint;
