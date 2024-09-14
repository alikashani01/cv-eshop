import useFetchReviews from "@/src/queries/review/useFetchList";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import {
    createContext,
    FormEvent,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";
import { ProductContext } from "../../../../../../_Context";

export type Data = {
    title: string;
    comment: string;
    rating: number;
    advantages: string[];
    disadvantages: string[];
};

type Context = {
    handleAdvantage: (value: string) => void;
    handleDisadvantage: (value: string) => void;
    data: Data;
    onChange: (e: FormEvent) => void;
    reviewID?: string;
};

export const Context = createContext({} as Context);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const { _id } = useContext(ProductContext);

    const { data: reviews } = useFetchReviews(_id!, "جدیدترین");

    const { data: user } = useFetchUserDetails();

    const alreadyReviewd = reviews?.find(
        (r) => r.user?._id === user?._id && r.product._id === _id!
    );

    const [data, setData] = useState({
        title: "",
        comment: "",
        rating: 0,
        advantages: [] as string[],
        disadvantages: [] as string[],
    });

    useEffect(() => {
        if (alreadyReviewd)
            setData({
                title: alreadyReviewd.title || "",
                comment: alreadyReviewd.comment || "",
                rating: alreadyReviewd.rating,
                advantages: alreadyReviewd.advantages || [],
                disadvantages: alreadyReviewd.disadvantages || [],
            });
    }, [alreadyReviewd]);

    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    const handleAdvantage = (value: string) => {
        setData({
            ...data,
            advantages: data.advantages.includes(value)
                ? data.advantages.filter((a) => a !== value)
                : [value, ...data.advantages],
        });
    };

    const handleDisadvantage = (value: string) => {
        setData({
            ...data,
            disadvantages: data.disadvantages.includes(value)
                ? data.disadvantages.filter((a) => a !== value)
                : [value, ...data.disadvantages],
        });
    };

    const contextValues = {
        handleAdvantage,
        handleDisadvantage,
        data,
        onChange: handleChange,
        reviewID: alreadyReviewd?._id,
    };

    return (
        <Context.Provider value={contextValues}>{children}</Context.Provider>
    );
};

export default ContextProvider;
