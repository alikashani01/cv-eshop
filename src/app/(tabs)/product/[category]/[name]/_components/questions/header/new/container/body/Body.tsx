import Content from "./Content";
import Subject from "./Subject";

const Body = () => {
    return (
        <div className="md:w-[550px] max-h-[70vh] lg:h-[350px] overflow-y-auto">
            <Subject />
            <Content />
        </div>
    );
};

export default Body;
