import { useContext } from "react";
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Loading/Loading";
 
 
 

 
const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)

    if (loading) {
        return   <Loading></Loading>
          
    }

    if(user){
        return children;
    }
    return ( <Navigate state={location.pathname} to={'/login'}></Navigate>);
};

export default PrivetRoute;