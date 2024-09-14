import { useContext } from "react";
import { Context } from "../_Context";
import Error from "./Error";

const Description = () => {
    const { setValue, watch, register, errors } = useContext(Context);
    const error = errors.description?.message;
    const description = watch("description");
    return (
        <div>
            <div className="bg-white border border-neutral-200 rounded-2xl">
                <label
                    className="block p-3 px-5 text-sm text-neutral-500"
                    htmlFor="description"
                >
                    توضیحات
                </label>
                <textarea
                    id="description"
                    className="w-full h-28 px-5 bg-[unset] text-neutral-700 placeholder:font-shabt placeholder:text-[.8rem] placeholder:text-neutral-400 rounded-2xl transition-all duration-500"
                    placeholder="توضیحات ..."
                    {...register("description", { required: true })}
                />
                {description && (
                    <button
                        type="button"
                        className="absolute left-5 bg-neutral-100 p-[2px] rounded-full"
                        onClick={() => setValue("description", "")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#888888"
                            className="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                )}
            </div>
            {error && <Error message={error} />}
        </div>
    );
};

export default Description;
