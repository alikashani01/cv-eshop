import CancelButtonLines from "@/src/app/_components/_modules/close-button/CloseButtonLines";

const Footer = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 z-10 w-full h-12 flex items-center justify-between px-4 bg-slate-800 border-t border-slate-700">
            <CancelButtonLines onClose={onClose} />
        </div>
    );
};

export default Footer;
