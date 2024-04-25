import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location= useLocation()
    //console.log(location.pathname)
    if(loading){
        return <div className="flex gap-4 justify-center content-center items-center">
                    <span className="min-h-screen loading loading-infinity loading-md text-5xl text-accent text-center flex justify-center content-center items-center justify-contents-center"></span>
                    <span className="min-h-screen loading loading-infinity loading-lg text-5xl text-accent text-center flex justify-center content-center items-center justify-contents-center"></span>
                    <span className="min-h-screen loading loading-infinity loading-md text-5xl text-accent text-center flex justify-center content-center items-center justify-contents-center"></span>
                </div>
    }    
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/signIn'></Navigate>;
};

export default PrivateRoute;