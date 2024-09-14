import { useContext } from "react";
import { Context } from "../Context";

const Content = () => {
    const {
        data: { content },
        onChange,
    } = useContext(Context);
    return (
        <div className="p-4">
            <label
                className="block mb-2 mr-1 text-sm text-neutral-300  text-[.95rem]"
                htmlFor="content"
            >
                پرسش‌تان را بنویسید
            </label>
            <textarea
                className="w-full h-32 md:h-40 rounded-2xl py-3 p-4 text-white bg-slate-600 border border-slate-500 focus:border-blue-500 transition duration-300 placeholder:text-neutral-400 placeholder:font-shabt"
                id="content"
                name="content"
                placeholder="متن پرسش ..."
                value={content}
                onChange={onChange}
            />
        </div>
    );
};

export default Content;
