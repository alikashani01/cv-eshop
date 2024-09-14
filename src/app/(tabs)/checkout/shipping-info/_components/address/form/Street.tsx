import { useContext } from "react";
import { Context } from "../../../_Context";

const Street = ({ street }: { street: string }) => {
    const { onChange } = useContext(Context);
    return (
        <div className="mt-4">
            <label
                className="mb-1 mr-2 text-sm font-shabt text-[#888888] block"
                htmlFor="street"
            >
                خیابان و محله
            </label>
            <input
                id="street"
                className="w-full py-4 px-5 rounded-2xl bg-second-theme border border-[#f1f1f1dd] placeholder:font-shabt focus:border-blue-500 transition-all duration-500"
                type="text"
                name="street"
                placeholder="مثال: خیابان مشتاق کوچه ۳۳ بن بست ۴"
                value={street}
                onChange={onChange}
            />
        </div>
    );
};

export default Street;
