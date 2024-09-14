import Backdrop from "@/src/app/_components/_modules/backdrop/Backdrop";
import CloseButton from "@/src/app/_components/_modules/close-button/CloseButton";
import CancelButtonLines from "@/src/app/_components/_modules/close-button/CloseButtonLines";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";

interface Props {
    id: string;
    isOpen: boolean;
    onClose: () => void;
}

const DetailsContainer = ({ id, isOpen, onClose }: Props) => {
    const { data: user } = useFetchUserDetails();
    const currentAddress = user?.addresses?.find((a) => a._id === id);
    return (
        <Backdrop isOpen={isOpen} onClose={onClose}>
            <div className="w-full">
                <p className="text-white p-4 text-sm">جزییات آدرس</p>

                <div className="flex flex-col px-4 pb-10 *:min-h-10 *:p-2 *:py-3 *:border-b *:border-slate-700 last:*:border-none *:text-white">
                    <p>{currentAddress?.title}</p>
                    <div>
                        <p className="text-sm text-neutral-300 font-shabt mb-[6px]">
                            استان و شهر
                        </p>
                        <div className="flex items-center gap-2 text-[.95rem]">
                            <p>{currentAddress?.state}</p>
                            <p>{currentAddress?.city}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-300 font-shabt mb-[6px]">
                            خیابان
                        </p>
                        <p className="text-[.95rem]">
                            {currentAddress?.street}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-300 font-shabt mb-[6px]">
                            کد پستی
                        </p>
                        <p className="text-[.95rem]">
                            {currentAddress?.zipCode}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-300 font-shabt mb-[6px]">
                            شماره تماس
                        </p>
                        <p className="text-[.95rem]">
                            {currentAddress?.phone || "ثبت نشده"}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-300 font-shabt mb-[6px]">
                            توضیحات
                        </p>
                        <p className="text-[.95rem]">
                            {currentAddress?.description || "ثبت نشده"}
                        </p>
                    </div>
                </div>

                <CancelButtonLines onClose={onClose} />
            </div>
        </Backdrop>
    );
};

export default DetailsContainer;
