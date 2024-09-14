import Empty from "@/src/app/_components/_modules/Empty";
import useFetchQuestions from "@/src/queries/question/useFetchList";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../../../../_Context";

const FullListLink = () => {
    const pathname = usePathname();
    const { _id } = useContext(ProductContext);
    const { data: questions, isPending } = useFetchQuestions(_id!);
    return isPending ? null : questions?.length === 0 ? (
        <Empty message="هنوز پرسشی ثبت نشده" />
    ) : (
        questions && (
            <Link
                href={`${pathname}/questions`}
                className="gap-1 *:font-shabt text-sm"
            >
                <span>نمایش تمام</span>
                <span>{convertEngToPer(questions?.length!)}</span>
                <span>پرسش‌ها</span>
            </Link>
        )
    );
};

export default FullListLink;
