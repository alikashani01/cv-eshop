const Header = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="h-14 flex items-center justify-between px-6">
            <p className="text-neutral-200">ویرایش شماره موبایل</p>
            <button onClick={onClose} className="text-sm">
                لغو
            </button>
        </div>
    );
};

export default Header;
