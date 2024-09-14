import { Skeleton } from "@mui/material";

const Loader = () => {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton
                width="100%"
                height="96px"
                variant="rounded"
                animation="wave"
                className="h-14 !bg-second-theme !rounded-2xl"
            />
            <Skeleton
                width="100%"
                height="48px"
                variant="rounded"
                animation="wave"
                className="h-12 !bg-second-theme !rounded-2xl"
            />
            <div className="flex items-center gap-4 mt-6 *:flex-1">
                <Skeleton
                    width=""
                    height="96px"
                    variant="rounded"
                    animation="wave"
                    className="h-24 !bg-second-theme !rounded-2xl"
                />
                <Skeleton
                    width=""
                    height="96px"
                    variant="rounded"
                    animation="wave"
                    className="h-24 !bg-second-theme !rounded-2xl"
                />
            </div>
            <div className="*:mb-2">
                <Skeleton
                    width="100%"
                    height="50px"
                    variant="rounded"
                    animation="wave"
                    className="h-12 !bg-second-theme !rounded-full"
                />
                <Skeleton
                    width="100%"
                    height="50px"
                    variant="rounded"
                    animation="wave"
                    className="h-12 !bg-second-theme !rounded-full"
                />
                <Skeleton
                    width="100%"
                    height="50px"
                    variant="rounded"
                    animation="wave"
                    className="h-12 !bg-second-theme !rounded-full"
                />
                <Skeleton
                    width="100%"
                    height="50px"
                    variant="rounded"
                    animation="wave"
                    className="h-12 !bg-second-theme !rounded-full"
                />
            </div>
        </div>
    );
};

export default Loader;
