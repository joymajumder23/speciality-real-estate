import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-nunito">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;