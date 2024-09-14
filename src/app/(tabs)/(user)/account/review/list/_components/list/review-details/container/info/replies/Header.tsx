import { convertEngToPer } from "@/src/utils/convertNumberTypes";

const Header = ({ replies }: { replies: number }) => {
    return (
        <div className="h-10 flex items-center gap-2 px-1">
            {replies > 0 ? (
                <div className="flex items-center gap-1">
                    <p className="text-lg text-neutral-600 font-shabb">
                        {convertEngToPer(replies)}
                    </p>
                    <p className="text-sm text-neutral-600">پاسخ</p>
                </div>
            ) : (
                <p className="text-sm text-neutral-600">بدون پاسخ</p>
            )}
        </div>
    );
};

export default Header;
