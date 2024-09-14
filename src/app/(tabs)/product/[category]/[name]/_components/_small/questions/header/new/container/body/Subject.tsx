import { useContext } from "react";
import { Context } from "../Context";

const Subject = () => {
    const {
        data: { subject },
        onChange,
    } = useContext(Context);
    return (
        <div className="p-4">
            <label
                className="block mb-1 mr-2 text-neutral-500"
                htmlFor="subject"
            >
                موضوع
            </label>
            <input
                className="w-full h-14 p-4 px-4 bg-second-theme rounded-2xl border border-neutral-200 text-lg focus:border-blue-500 transition duration-300"
                id="subject"
                type="text"
                name="subject"
                placeholder="موضوع پرسش..."
                value={subject}
                onChange={onChange}
            />
        </div>
    );
};

export default Subject;
