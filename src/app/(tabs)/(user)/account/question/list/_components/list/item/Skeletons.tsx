import { Skeleton } from "@mui/material";

const Skeletons = () => {
    return (
        <div className="p-4 *:mb-4">
            <Skeleton
                variant="rounded"
                height="200px"
                width="100%"
                animation="wave"
                sx={{ background: "#282828", borderRadius: "12px" }}
            />
            <Skeleton
                variant="rounded"
                height="200px"
                width="100%"
                animation="wave"
                sx={{ background: "#282828", borderRadius: "12px" }}
            />
        </div>
    );
};

export default Skeletons;
