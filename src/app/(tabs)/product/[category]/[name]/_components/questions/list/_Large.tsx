import { Question } from "@/src/queries/question/Entities";
import Item from "./item/Item";
import Loading from "./Loading";

interface Props {
    questions?: Question[];
    isPending: boolean;
    openQuestionDetails: (id: string) => void;
}

const Large = ({ questions, isPending, openQuestionDetails }: Props) => {
    return (
        <ul className="hidden lg:grid grid-cols-2 gap-6 pt-6">
            {isPending ? (
                <Loading />
            ) : (
                questions?.map((question) => (
                    <Item
                        key={question._id}
                        question={question}
                        onOpenDetails={openQuestionDetails}
                    />
                ))
            )}
        </ul>
    );
};

export default Large;
