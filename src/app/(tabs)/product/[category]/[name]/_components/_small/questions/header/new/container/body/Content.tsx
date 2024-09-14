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
                className="block mb-1 mr-2 text-neutral-500 text-[.95rem]"
                htmlFor="content"
            >
                پرسش‌تان را بنویسید
            </label>
            <textarea
                className="w-full h-32 rounded-2xl py-3 p-4 bg-second-theme border border-neutral-200 focus:border-blue-500 transition duration-300"
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
