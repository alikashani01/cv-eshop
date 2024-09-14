import { useContext } from "react";
import { Context } from "../Context";

const Comment = () => {
    const {
        data: { comment },
        onChange,
    } = useContext(Context);
    return (
        <div className="p-4">
            <label
                className="block mb-2 mr-2 text-neutral-200 text-[.9rem]"
                htmlFor="comment"
            >
                نظرتان را بنویسید
            </label>
            <textarea
                className="w-full h-28 p-4 px-4 text-white bg-slate-700 rounded-2xl border border-slate-600 text-lg focus:border-blue-500 transition duration-300 placeholder:text-neutral-400 placeholder:font-shabt"
                id="comment"
                name="comment"
                placeholder="محتوای دیدگاه..."
                value={comment}
                onChange={onChange}
            />
        </div>
    );
};

export default Comment;
