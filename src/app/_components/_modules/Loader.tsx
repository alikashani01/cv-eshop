import Spinner from "./spinner/Spinner";

const PageLoader = ({ title }: { title?: string }) => {
    return (
        <div className="w-dvw h-dvh bg-[#fff2] backdrop-blur-sm fixed inset-0 z-50 flex flex-col gap-2 items-center justify-center">
            <Spinner />
            <p className="text-sm text-dark-theme">{title}</p>
        </div>
    );
};

export default PageLoader;
