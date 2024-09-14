import Empty from "@/src/app/_components/_modules/Empty";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";

const FullListLink = () => {
    const pathname = usePathname();
    const { _id } = useContext(ProductContext);
    const { data: reviews, isPending } = useFetchReviews(_id!);
    return isPending ? null : reviews?.length === 0 ? (
        <Empty message="هنوز دیدگاهی ثبت نشده" />
    ) : (
        reviews && (
            <Link
                href={`${pathname}/reviews`}
                className="gap-1 *:font-shabt text-sm"
            >
                <span>نمایش تمام</span>
                <span>{convertEngToPer(reviews?.length!)}</span>
                <span>دیدگاه‌ها</span>
            </Link>
        )
    );
};

export default FullListLink;
