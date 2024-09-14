import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import Image from "next/image";
import Link from "next/link";

const Actions = ({ onToggle }: { onToggle: () => void }) => {
    const { data: user } = useFetchUserDetails();
    return (
        <div className="flex items-center gap-3">
            <Link
                href="new"
                className="w-[32px] h-[32px] bg-neutral-100 rounded-full"
            >
                <Image
                    width={16.5}
                    height={16.5}
                    src="/icons/add.png"
                    alt=""
                    priority
                />
            </Link>
            {user?.addresses?.length! > 0 && (
                <button
                    className="w-[32px] h-[32px] bg-neutral-100 rounded-full"
                    onClick={onToggle}
                >
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
