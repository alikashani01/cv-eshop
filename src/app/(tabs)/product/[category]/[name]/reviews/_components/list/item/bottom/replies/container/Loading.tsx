import { Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <div className="p-6">
            <div>
                <Skeleton
                    width="100%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-slate-700"
                />
                <Skeleton
                    width="60%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-slate-700"
                />
                <Skeleton
                    width="80%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-slate-700"
                />
            </div>
            <div className="mt-4">
                <Skeleton
                    width="100%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-slate-700"
                />
                <Skeleton
                    width="60%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-slate-700"
                />
                <Skeleton
                    width="80%"
                    height="18px"
                    variant="text"
                    animation="wave"
                    className="!bg-slate-700"
                />
            </div>
        </div>
    );
};

export default Loading;
