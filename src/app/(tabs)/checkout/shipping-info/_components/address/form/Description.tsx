import { useContext } from "react";
import { Context } from "../../../_Context";

const Description = ({ description }: { description: string }) => {
    const { onChange } = useContext(Context);
    return (
        <div className="mt-4">
            <label
                className="text-sm mb-1 mr-2 text-[#888888] font-shabt block min-w-[40px]"
                htmlFor="description"
            >
                توضیحات
            </label>
            <textarea
                className="w-full h-28 py-4 px-5 rounded-2xl bg-second-theme border border-[#f1f1f1dd] placeholder:font-shabt focus:border-blue-500 transition-all duration-500"
                id="description"
                name="description"
                placeholder="متن توضیحات ..."
                value={description}
                onChange={onChange}
            />
        </div>
    );
};

export default Description;
