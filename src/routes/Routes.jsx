import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Estates from "../components/Estates/Estates";
import EstateDetails from "../components/Estates/EstateDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [{
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/estates.json")
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/estates",
            element: <Estates></Estates>,
            loader: () => fetch('/estates.json')
        },
        {
            path: "/details/:id",
            element: <EstateDetails></EstateDetails>,
            loader: () => fetch('/estates.json')
        }]
    },
]);

export default router;