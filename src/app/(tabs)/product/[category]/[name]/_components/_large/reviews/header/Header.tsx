import Empty from "@/src/app/_components/_modules/Empty";
import useFetchReviews from "@/src/queries/review/useFetchList";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";
import NewReview from "./new-review/NewReview";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const { _id } = useContext(ProductContext);
    const { data: reviews, isPending } = useFetchReviews(_id!);
    return (
        <div className="flex items-center justify-between py-4 p-6 bg-second-theme rounded-2xl">
            <div className="flex items-center gap-2">
                <p>دیدگاه‌ها</p>
                {isPending ? null : reviews?.length === 0 ? (
                    <Empty message="هنوز دیدگاهی ثبت نشده" />
                ) : (
                    <Link
                        href={`${pathname}/reviews`}
                        className="gap-1 *:font-shabt text-sm"
                    >
                        <span>نمایش تمام</span>
                        <span>{convertEngToPer(reviews?.length!)}</span>
                        <span>دیدگاه‌ها</span>
                    </Link>
                )}
            </div>
            <NewReview />
        </div>
    );
};

export default Header;
