import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Estate from "../Estates/Estate";

const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <Header></Header>
            <div className="mt-24">
                <h1 className="text-3xl mb-8 text-center">Show All</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;