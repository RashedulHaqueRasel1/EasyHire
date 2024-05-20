import { createBrowserRouter } from "react-router-dom";

 
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
 




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]

    },
]);


export default router;