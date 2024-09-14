import { Metadata } from "next";
import Agreement from "./_components/Agreement";
import Form from "./_components/form/Form";
import Heading from "./_components/Heading";

const RegisterPage = async () => {
    return (
        <div className="flex items-center justify-center h-screen p-2">
            <div className="w-full max-w-[500px] overflow-y-auto no-scrollbar relative z-10 bg-[#fffa] backdrop-blur-2xl shadow-md shadow-[#cbd5e177] border border-neutral-100 rounded-xl p-4 mb-20 lg:mb-10">
                <Heading />
                <Form />
                <Agreement />
            </div>
        </div>
    );
};

export const metadata: Metadata = {
    title: "Tech Shop | ورود به حساب کاربری",
};

export default RegisterPage;
