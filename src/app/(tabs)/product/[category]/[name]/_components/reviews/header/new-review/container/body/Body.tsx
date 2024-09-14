import Comment from "./Comment";
import Points from "./points/Points";
import RatingContainer from "./Rating";
import Title from "./Title";

const Body = () => {
    return (
        <div className="md:w-[550px] h-[70vh] overflow-y-auto">
            <RatingContainer />
            <Title />
            <Comment />
            <Points />
        </div>
    );
};

export default Body;
