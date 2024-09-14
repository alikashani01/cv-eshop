import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <>
            <div className="h-10 flex items-center gap-2 px-1">پاسخ‌ها</div>
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
