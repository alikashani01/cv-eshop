import useFetchReviewReplies from "@/src/queries/review/reply/useFetchList";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../Item";

const RepliesLink = () => {
    const { _id } = useContext(Context);
    const { data: replies } = useFetchReviewReplies(_id);
    return (
        <>
            <Link href={_id} className="gap-[6px] mb-[2px] text-[.8rem]">
                پاسخ‌ها
                <p className="text-[.82rem] font-shabt tracking-[1px] flex items-center justify-center">
                    {convertEngToPer(replies?.length || 0)}
                </p>
            </Link>
        </>
    );
};

export default RepliesLink;
