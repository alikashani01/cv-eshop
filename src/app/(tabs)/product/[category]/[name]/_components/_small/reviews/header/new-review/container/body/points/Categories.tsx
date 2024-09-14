import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import { useContext } from "react";
import { Context } from "../../Context";

interface Props {
    category: string;
    setCategory: (value: string) => void;
}

const Categories = ({ category, setCategory }: Props) => {
    const {
        data: { advantages, disadvantages },
    } = useContext(Context);
    return (
        <div className="mb-3 mt-2 w-[250px] mx-auto">
            <div className="relative h-10 p-1 flex items-center justify-between rounded-xl bg-second-theme">
                <button
                    type="button"
                    onClick={() => setCategory("مثبت")}
                    className="relative z-10 flex-1 p-[6px] gap-2 rounded-[7.5px] transition-duration-[5]"
                >
                    <p className="text-[.9rem] text-neutral-500 font-shabt">
                        مثبت
                    </p>
                    <p className="text-neutral-500 text-sm">
                        {convertEngToPer(advantages.length)}
                    </p>
                </button>
                <button
                    type="button"
                    onClick={() => setCategory("منفی")}
                    className="relative z-10 flex-1 p-[6px] gap-2 rounded-[7.5px] transition-duration-[5]"
                >
                    <p className="text-[.9rem] text-neutral-500 font-shabt">
                        منفی
                    </p>
                    <p className="text-neutral-500 text-sm">
                        {convertEngToPer(disadvantages.length)}
                    </p>
                </button>

                <div
                    className="h-8"
                    style={{
                        background: "white",
                        borderRadius: "8px",
                        position: "absolute",
                        width: "calc(50% - 4px)",
                        transition: ".5s ease-in-out",
                        transform:
                            category === "مثبت"
                                ? "translateX(0)"
                                : "translateX(-100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Categories;
