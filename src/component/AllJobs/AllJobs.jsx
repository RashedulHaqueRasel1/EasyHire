import { useLoaderData } from "react-router-dom";
import AllJob from "./AllJob";



const AllJobs = () => {

    const allJobs = useLoaderData();
    // console.log(allJobs)


    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>

            {
                allJobs.map(allJob => <AllJob key={allJob._id} allJob={allJob}></AllJob> )
            }

 
        </div>
    );
};

export default AllJobs;