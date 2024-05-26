// import Download from "../Download/Download";

// import Download from "../Download/Download";





const ApplyJob = ({ job }) => {







    // console.log(job)

    const {
        title,
        salary,
        application_Number,
        category,
        photo,
        application_Date
    } = job;

    return (


        <tr className="border-2 border-blue-200 rounded-3xl  hover:bg-blue-200" >

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className=" rounded w-24 h-24">
                            <img src={photo} alt="Avatar Not Found" />
                        </div>
                    </div>
                    <div>
                        {/* <div className="font-bold">{name}</div> */}
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{category}</td>
            <td>{application_Number}</td>
            <td>$ {salary}</td>


        </tr >

    );
};

export default ApplyJob;