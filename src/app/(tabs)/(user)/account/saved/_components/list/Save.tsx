import useSave from "@/src/queries/product/save/useSave";
import useFetchUserDetails from "@/src/queries/user/profile/useFetchDetails";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Save = ({ id }: { id: string }) => {
    const { data: user } = useFetchUserDetails();

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        id && user?.savedProducts?.includes(id)
            ? setIsSaved(true)
            : setIsSaved(false);
    }, [id, user?.savedProducts, isSaved]);

    const queryClient = useQueryClient();

    const saveProduct = useSave(id!);

    const handleSaveClick = async () => {
        if (!isSaved) {
            const updatedUser = {
                ...user,
                savedProducts: [...(user?.savedProducts || []), id!],
            };

            queryClient.setQueryData(["user-details"], updatedUser);
        } else {
            const updatedUser = {
                ...user,
                savedProducts: user?.savedProducts?.filter((x) => x !== id),
            };

            queryClient.setQueryData(["user-details"], updatedUser);
        }
        await saveProduct.mutateAsync();
    };

    return (
        <button onClick={handleSaveClick}>
            {isSaved ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#aaaaaa"
                    className="bi bi-bookmark-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#aaaaaa"
                    className="bi bi-bookmark"
                    viewBox="0 0 16 16"
                >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
            )}
        </button>
    );
};

export default Save;
