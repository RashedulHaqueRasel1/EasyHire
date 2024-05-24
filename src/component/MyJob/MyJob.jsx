import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const MyJob = ({ myJob, handleDelete, }) => {

    // console.log(myJob)

    const { user } = useContext(AuthContext);


    const { _id,
        job_title,
        salary,
        photo,
        application_Date
    } = myJob;




    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className=" rounded w-24 h-24">
                            <img src={photo} alt="Avatar Not Found" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {job_title}
            </td>
            <td>{user?.email}</td>
            <td>{new Date(application_Date).toLocaleDateString('en-GB')}</td>
            <td>$ {salary}</td>
            <th>
                <>
                    <Link to={`/updateJob/${_id}`}>
                        <button className="btn btn-primary ">Update</button>
                    </Link>
                </>

            </th>
        </tr>



    );
};

export default MyJob;