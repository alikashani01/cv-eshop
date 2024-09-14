import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";
import Link from "next/link";

const Actions = ({ onToggle }: { onToggle: () => void }) => {
    const { data: user } = useFetchUserDetails();
    return (
        <div className="flex items-center gap-5">
            <Link href="address/new">
                <Image
                    width={16.2}
                    height={16.2}
                    src="/icons/add.png"
                    alt=""
                    priority
                />
            </Link>
            {user?.addresses?.length! > 0 && (
                <button onClick={onToggle}>
                    <Image
                        width={17}
                        height={17}
                        src="/icons/edit/blue.png"
                        alt=""
                        objectFit="contain"
                        priority
                    />
                </button>
            )}
        </div>
    );
};

export default Actions;
