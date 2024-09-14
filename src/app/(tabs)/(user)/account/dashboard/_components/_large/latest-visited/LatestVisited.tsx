import Header from "./Header";
import dynamic from "next/dynamic";
const List = dynamic(() => import("./List"), { ssr: false });

const LatestVisited = () => {
    return (
        <div>
            <Header />
            <List />
        </div>
    );
};

export default LatestVisited;
