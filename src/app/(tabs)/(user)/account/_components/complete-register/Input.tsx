import { FormEvent } from "react";

interface Props {
    fullName: string;
    onChange: (e: FormEvent) => void;
}

const Input = ({ fullName, onChange }: Props) => {
    return (
        <input
            id="name"
            type="text"
            className="w-full p-4 px-5 bg-white border border-[#e1e1e1] rounded-2xl focus:border-blue-600 duration-300"
            placeholder="مثال: سارا احدی"
            name="fullName"
            value={fullName}
            onChange={onChange}
            required
        />
    );
};

export default Input;
