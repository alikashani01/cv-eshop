import DeleteAccount from "./DeleteAccount";
import Logout from "./Logout";

const Actions = () => {
    return (
        <div className="*:w-full *:h-12 *:border-t *:border-neutral-200">
            <Logout />
            <DeleteAccount />
        </div>
    );
};

export default Actions;
