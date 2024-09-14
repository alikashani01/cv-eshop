import useFetchQuestions from "@/src/queries/question/useFetchList";
import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { ProductContext } from "../../../_Context";
import Large from "./_Large";
import Small from "./_Small";
import FullQuestion from "./full-question/FullQuestion";

const List = () => {
    const [questionID, setQuestionID] = useState("");

    const openQuestionDetails = (id: string) => setQuestionID(id);

    const { _id } = useContext(ProductContext);

    const { data: questions, isPending } = useFetchQuestions(_id!);

    const limitedList = questions?.slice(0, 6);

    return (
        <>
            <Large
                questions={limitedList}
                isPending={isPending}
                openQuestionDetails={openQuestionDetails}
            />
            <Small
                questions={limitedList}
                isPending={isPending}
                openQuestionDetails={openQuestionDetails}
            />
            <FullQuestion
                questionID={questionID}
                onClose={() => setQuestionID("")}
            />
        </>
    );
};

export default List;
