interface Props {
    onOpenDetails: () => void;
    onClose: () => void;
}
const Details = ({ onClose, onOpenDetails }: Props) => {
    return (
        <button
            className="w-full h-10 justify-between p-3 gap-2 px-4 pl-[14.5px] border-b border-gray-700"
            onClick={() => {
                onOpenDetails();
                onClose();
            }}
        >
            <p className="text-[.8rem] text-gray-200 font-shabt">جزییات</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#ddd"
                className="bi bi-text-right"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                />
            </svg>
        </button>
    );
};

export default Details;
