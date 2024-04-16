import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;