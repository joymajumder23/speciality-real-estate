import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="max-w-6xl mx-auto font-nunito">
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                    <div className="flex flex-col gap-4 w-full">
                        <div className="skeleton h-48 w-full"></div>
                        <div className="skeleton h-20 w-48"></div>
                        <div className="skeleton h-20 w-full"></div>
                        <div className="skeleton h-20 w-full"></div>
                    </div> : <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Root;