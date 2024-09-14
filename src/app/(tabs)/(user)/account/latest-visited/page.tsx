import dynamic from "next/dynamic";
import Header from "./_components/Header";
const List = dynamic(() => import("./_components/List"), { ssr: false });

const LatestVisitedPage = () => {
    return (
        <>
            <Header />
            <List />
        </>
    );
};

export default LatestVisitedPage;
