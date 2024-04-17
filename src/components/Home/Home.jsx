import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Estate from "../Estates/Estate";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header></Header>
            <div className="mt-24">
                <h1 className="text-3xl mb-8 text-center font-bold">Featured Properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__backInUp">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;