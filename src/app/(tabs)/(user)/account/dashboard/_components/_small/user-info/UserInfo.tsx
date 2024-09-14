import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Link from "next/link";
import Mobile from "./Mobile";
import Name from "./Name";

const UserInfo = () => {
    return (
        <Link
            href="profile"
            className="h-16 bg-15 rounded-2xl py-3 p-4 justify-between bg-second-theme"
        >
            <div>
                <Name />
                <Mobile />
            </div>
            <ArrowBackIosNewRoundedIcon
                sx={{ fontSize: "1rem", color: "#777777" }}
            />
        </Link>
    );
};

export default UserInfo;
