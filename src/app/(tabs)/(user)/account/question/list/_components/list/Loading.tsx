import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <div className="!bg-second-theme lg:!bg-white !rounded-2xl p-4 *:!my-1">
                <Skeleton
                    width="100%"
                    height="16px"
                    variant="text"
                    animation="wave"
                    className="!bg-white lg:!bg-second-theme"
                />
                <Skeleton
                    width="60%"
                    height="16px"
                    variant="text"
                    animation="wave"
                    className="!bg-white lg:!bg-second-theme"
                />
                <Skeleton
                    width="80%"
                    height="16px"
                    variant="text"
                    animation="wave"
                    className="!bg-white lg:!bg-second-theme"
                />
            </div>
            <div className="!bg-second-theme lg:!bg-white !rounded-2xl p-4 *:!my-1">
                <Skeleton
                    width="100%"
                    height="16px"
                    variant="text"
                    animation="wave"
                    className="!bg-white lg:!bg-second-theme"
                />
                <Skeleton
                    width="60%"
                    height="16px"
                    variant="text"
                    animation="wave"
                    className="!bg-white lg:!bg-second-theme"
                />
                <Skeleton
                    width="80%"
                    height="16px"
                    variant="text"
                    animation="wave"
                    className="!bg-white lg:!bg-second-theme"
                />
            </div>
        </>
    );
};

export default Loading;
