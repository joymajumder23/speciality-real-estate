import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Estates from "../components/Estates/Estates";
import EstateDetails from "../components/Estates/EstateDetails";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
            element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
            loader: () => fetch('/estates.json')
        },
        {
            path: "/updateProfile",
            element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        }]
    }
]);

export default router;