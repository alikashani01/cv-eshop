import Modal from "@/src/app/_components/_modules/Modal";

interface Props {
    open: boolean;
    onClose: () => void;
    rating: number;
    title: string;
}

const Error = ({ open, onClose, rating, title }: Props) => {
    return (
        <Modal title="" open={open} onClose={onClose}>
            <div className="w-full bg-[#333] rounded-xl md:w-[300px] h-[150px]">
                <div className="flex flex-col items-center justify-center gap-2 h-[96px] *:text-[.92rem] text-neutral-200">
                    {rating === 0 && <p>لطفا امتیاز دهید</p>}
                    {!title && <p>لطفا عنوان دیدگاه و نظرتان را بنویسید</p>}
                </div>
                <button
                    className="w-full h-14 justify-center border-t border-[#444]"
                    onClick={onClose}
                >
                    باشه
                </button>
            </div>
        </Modal>
    );
};

export default Error;
