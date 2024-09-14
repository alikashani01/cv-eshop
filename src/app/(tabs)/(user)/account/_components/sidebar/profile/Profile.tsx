import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { convertEngToPer } from "@/src/utils/convertNumberTypes";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Profile = () => {
    const pathname = usePathname();
    const isActive = pathname === "/account/dashboard";
    const { data: user, isPending } = useFetchUserDetails();
    return (
        <Link
            href="/account/dashboard"
            className="h-16 justify-between p-4 pt-[18px] border-b border-neutral-200"
        >
            <div className="w-full">
                {isPending ? (
                    <>
                        <Skeleton
                            width="80%"
                            height="18px"
                            variant="text"
                            animation="wave"
                            className="!bg-white"
                        />
                        <Skeleton
                            width="60%"
                            height="15px"
                            variant="text"
                            animation="wave"
                            className="!bg-white mt-1"
                        />
                    </>
                ) : (
                    <>
                        <p className="font-shabb mr-[2px] text-neutral-700">
                            {user?.fullName}
                        </p>
                        <p className="text-[.92rem] text-neutral-700 tracking-[2px] font-shabt">
                            {convertEngToPer(user?.mobile!)}
                        </p>
                    </>
                )}
            </div>
            {!isActive && (
                <ArrowBackIosNewRoundedIcon
                    sx={{ fontSize: "1.1rem", color: "#666" }}
                />
            )}
        </Link>
    );
};

export default Profile;
