import Marquee from "./marquee/Marquee";
import One from "./one/One";
import Three from "./three/Three";
import Two from "./two/Two";

export default function Body() {
    return (
        <div className="overflow-hidden">
            <One />
            <Two />
            <Three />
            <Marquee />
        </div>
    );
}
