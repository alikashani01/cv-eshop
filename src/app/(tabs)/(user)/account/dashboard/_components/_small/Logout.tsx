import Spinner from "@/src/app/_components/_modules/spinner/Spinner";
import useLogout from "@/src/queries/user/useLogout";

const Logout = () => {
    const { mutate: logout, isPending } = useLogout();
    return (
        <button
            className="gap-2 bg-second-theme rounded-2xl h-12 text-[.92rem] text-neutral-600"
            onClick={() => logout()}
            disabled={isPending}
        >
            {isPending && <Spinner />}
            خروج
        </button>
    );
};

export default Logout;
