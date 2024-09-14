import Content from "./Content";
import Subject from "./Subject";

const Body = () => {
    return (
        <div className="md:w-[550px] lg:w-[700px] h-[70vh] overflow-y-auto">
            <Subject />
            <Content />
        </div>
    );
};

export default Body;
