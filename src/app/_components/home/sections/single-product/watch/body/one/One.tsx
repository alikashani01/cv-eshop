import Media from "./Media";
import Text from "./Text";

export default function One() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 py-6 lg:py-20">
            <Media />
            <Text />
        </div>
    );
}
