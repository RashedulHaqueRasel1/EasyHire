import { createBrowserRouter } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import AllJobs from "../AllJobs/AllJobs";
import Error from "../Error/Error";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import CardDetails from "../CardDetails/CardDetails";
import AddJobs from "../AddJobs/AddJobs";
import MyJobs from "../MyJobs/MyJobs";
import ApplyJobs from "../ApplyJobs/ApplyJobs";
 




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
                element:  <AllJobs></AllJobs> ,
                loader: ()=> fetch(`${import.meta.env.VITE_API}/allJobs`)
            },
            {
                path: '/cardDetails/:id',
                element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
            },
            {
                path: '/addJobs',
                element: <PrivetRoute><AddJobs></AddJobs></PrivetRoute>
            },
            {
                path: '/myJobs',
                element: <PrivetRoute><MyJobs></MyJobs></PrivetRoute>
            },
            {
                path: '/applyJobs',
                element: <PrivetRoute><ApplyJobs></ApplyJobs></PrivetRoute>
            }
        ]

    },
]);


export default router;