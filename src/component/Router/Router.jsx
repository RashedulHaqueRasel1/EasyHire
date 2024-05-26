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
import Profile from "../Profile/Profile";
import UpdateJob from "../UpdateJob/UpdateJob";
import Blogs from "../Blogs/Blogs";
 




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
                loader: ({params}) => fetch(`https://easy-hire-server-site.vercel.app/allJobs/${params.id}`)
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
            },
            {
                path: '/profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path: '/updateJob/:id',
                element: <PrivetRoute><UpdateJob></UpdateJob></PrivetRoute>,
                loader: ({params}) => fetch(`https://easy-hire-server-site.vercel.app/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]

    },
]);


export default router;