import useVerify from "@/src/queries/user/login/useVerify";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Container from "../Container";
import Input from "./Input";
import Resend from "./Resend";

interface Props {
    mobile: string;
    onVerify: () => void;
}

const Verify = ({ mobile, onVerify }: Props) => {
    const login = useVerify();
    const { error } = login;
    return (
        <Container>
            <>
                <p className="text-gray-200 text-[.95rem]">
                    کد تایید به شماره‌ی زیر ارسال شد
                </p>
                <p className="h-7 flex items-center text-sm text-gray-300 text-[1.1rem] tracking-[2px]">
                    {convertEngToPer(mobile)}
                </p>
            </>
            {error?.message}
            <Input mobile={mobile} login={login} />
            <>
                <button className="text-sm" onClick={onVerify}>
                    تغییر شماره موبایل
                </button>
                <Resend mobile={mobile} />
            </>
        </Container>
    );
};

export default Verify;
