import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyJob from "../MyJob/MyJob";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const MyJobs = () => {

    const { user } = useContext(AuthContext);

    const [item, setItem] = useState([]);
    const navigate = useNavigate();






    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/allJobss/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItem(data)

            });
    }, [user])


    // console.log(item)


    // Handle Delete
    const handleDelete = id => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://easy-hire-server-site.vercel.app/allJobs/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourists Spots has been deleted.",
                                icon: "success"

                            });

                            navigate('/myJobs')
                        }


                    })
                const remaining = item.filter(jobs => jobs._id !== id)
                setItem(remaining)
            }
        });


    }






    // Handle Update
    const handleUpdate = id => {
        // const proceed =
        fetch(`https://easy-hire-server-site.vercel.app/allJobs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {

                    alert('Update')

                    const remaining = item.filter(booking => booking._id !== id);
                    const update = item.find(booking => booking._id === id);
                    update.status = 'confirm'
                    const newBookings = [update, ...remaining]
                    setItem(newBookings)
                }
            })
    }



    return (
        <div>
            <div>
                <h1 className="text-6xl text-primary text-center my-8">Total My Job : {item.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        Delete
                                    </label>
                                </th>
                                <th> img</th>
                                <th>Job Title</th>
                                <th>Email</th>
                                <th>Application Date</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                item.map(myJob => <MyJob
                                    key={myJob._id}
                                    myJob={myJob}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                ></MyJob>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyJobs;