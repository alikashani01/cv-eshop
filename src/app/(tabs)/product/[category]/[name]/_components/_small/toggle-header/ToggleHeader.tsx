import RatingContainer from "./Rating";
import BackLink from "./BackLink";
import Cover from "./Cover";

const ToggleHeader = ({ toggle }: { toggle: boolean }) => {
    return (
        <div
            className={`flex items-center justify-between px-4 *:flex *:items-center *:flex-1 sticky left-0 top-0 z-20 !bg-[#f5f5f5] !rounded-none !w-dvw backdrop-blur-xl transition duration-500 overflow-hidden
            ${
                toggle
                    ? "h-12 transition-all duration-500"
                    : "h-0  transition-all duration-500"
            }
            `}
        >
            <BackLink />

            <Cover />

            <RatingContainer />
        </div>
    );
};

export default ToggleHeader;
