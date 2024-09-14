import One from "./One";
import Three from "./Three";
import Two from "./Two";

const Related = () => {
    return (
        <section className="p-4 md:px-[5%] lg:px-[8%] pt-16">
            <div className="*:bg-[#f5f5f7] *:rounded-2xl grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-2">
                <One />
                <Two />
                <Three />
            </div>
        </section>
    );
};

export default Related;
