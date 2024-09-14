import { useContext } from "react";
import { Context } from "../../../_Context";
import InputContainer from "./InputContainer";

const ZipCode = ({ zipCode }: { zipCode: string }) => {
    const { onChange } = useContext(Context);
    return (
        <div className="mt-4">
            <label
                className="mb-1 mr-2 text-sm font-shabt text-neutral-500 block"
                htmlFor="zipCode"
            >
                کد پستی یا پلاک
            </label>
            <input
                className="w-full py-4 px-5 rounded-2xl bg-second-theme border border-[#f1f1f1dd] placeholder:font-shabt focus:border-blue-500 transition-all duration-500"
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder="مثال: ۳۴۳۴۳۴۲۲۲ یا ۵۰"
                value={zipCode}
                onChange={onChange}
            />
        </div>
    );
};

export default ZipCode;
