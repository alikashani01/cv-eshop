import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <div>
                <Skeleton
                    width="100%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-white"
                />
                <Skeleton
                    width="60%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-white"
                />
                <Skeleton
                    width="80%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-white"
                />
            </div>
            <div className="mt-4">
                <Skeleton
                    width="100%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-white"
                />
                <Skeleton
                    width="60%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-white"
                />
                <Skeleton
                    width="80%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-white"
                />
            </div>
        </>
    );
};

export default Loading;
