import { createBrowserRouter } from "react-router-dom";

 
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import AllJobs from "../AllJobs/AllJobs";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Error from "../Error/Error";
 




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`${import.meta.env.VITE_API}/allJobs`)
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: '/allJobs',
                element: <PrivetRoute><AllJobs></AllJobs></PrivetRoute>,
                loader: ()=> fetch(`${import.meta.env.VITE_API}/allJobs`)
            }
        ]

    },
]);


export default router;