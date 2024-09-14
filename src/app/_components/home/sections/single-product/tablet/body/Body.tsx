import Four from "./four/Four";
import Marquee from "./marquee/Marquee";
import One from "./one/One";
import Three from "./three/Three";
import Two from "./two/Two";

export default function Body() {
    return (
        <div>
            <One />
            <Two />
            <Three />
            <Four />
            <Marquee />
            <p className="pt-20 flex items-center justify-center text-xl lg:text-4xl font-sfh text-[#5701ce]">
                iPad Pro M4
            </p>
        </div>
    );
}
