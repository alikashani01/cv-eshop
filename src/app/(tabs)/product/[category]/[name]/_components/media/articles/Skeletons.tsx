import { Skeleton } from "@mui/material";

const Skeletons = () => {
    return (
        <div className="flex items-center gap-5 p-4 *:mb-4">
            <Skeleton
                variant="rounded"
                height="220px"
                width="100%"
                animation="wave"
                sx={{ background: "#282828", borderRadius: "12px" }}
            />
        </div>
    );
};

export default Skeletons;
