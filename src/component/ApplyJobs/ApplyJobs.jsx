import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ApplyJob from "../ApplyJob/ApplyJob";
// import { LiaSortDownSolid } from "react-icons/lia";



const ApplyJobs = () => {

    const { user } = useContext(AuthContext);



    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('All');



    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/applyJobss/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setJobs(data)


            });
    }, [user])


    // Handle Filter Jobs By category
    const handleFilterChange = (category) => {
        setFilter(category);
    };


    const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.category === filter);



    return (
        <div>

            <div className="text-center mt-6 ">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="m-1 btn  hover:outline text-[16px] bg-primary hover:bg-transparent text-white hover:text-black mr-3  ">Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow   rounded-box w-52 bg-primary">
                        <li className="bg-white rounded-3xl font-bold">
                            <p onClick={() => handleFilterChange('All')}>All</p>
                        </li>
                        <li className="bg-white rounded-3xl font-bold mt-1">
                            <p onClick={() => handleFilterChange('Remote')}>Remote</p>
                        </li>
                        <li className="bg-white rounded-3xl font-bold mt-1">
                            <p onClick={() => handleFilterChange('On Site')}>On-site</p>
                        </li>
                        <li className="bg-white rounded-3xl font-bold mt-1">
                            <p onClick={() => handleFilterChange('Hybrid')}>Hybrid</p>
                        </li>
                        <li className="bg-white rounded-3xl font-bold mt-1">
                            <p onClick={() => handleFilterChange('Part-Time')}>Part-time</p>
                        </li>
                    </ul>
                </div>
            </div>


            <div>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th> img</th>
                                <th>Job Title</th>
                                <th>Category</th>
                                <th>Application Number</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* row 1 */}

                            {
                                filteredJobs.map(job => <ApplyJob key={job._id} job={job}></ApplyJob>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>





        </div>
    );
};

export default ApplyJobs;