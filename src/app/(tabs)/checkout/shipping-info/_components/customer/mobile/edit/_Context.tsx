import useEditMobile from "@/src/queries/order/mobile/useEdit";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { convertEngToPerDigits } from "@/src/utils/convertNumberTypes";
import { UseMutationResult } from "@tanstack/react-query";
import {
    createContext,
    FormEvent,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";

type IContext = {
    data: string;
    onChange: (event: FormEvent) => void;
    editMobile: UseMutationResult<string, Error, string, unknown>;
    onVerify: () => void;
    verifyOpen: boolean;
};

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [verifyOpen, setVerifyOpen] = useState(false);
    const handleOpen = () => setVerifyOpen(!verifyOpen);

    const [data, setData] = useState("");
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        const persianValue = convertEngToPerDigits(target.value);
        setData(persianValue);
    };

    const editMobile = useEditMobile();
    const { isSuccess } = editMobile;
    useEffect(() => {
        isSuccess && handleOpen();
    }, [isSuccess]);

    const { data: user } = useFetchUserDetails();
    useEffect(() => {
        user?.mobile && setData(convertEngToPerDigits(user?.mobile));
    }, [user?.mobile]);

    const contextVlaues = {
        data,
        onChange: handleChange,
        editMobile,
        onVerify: handleOpen,
        verifyOpen,
    };
    return (
        <Context.Provider value={contextVlaues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
