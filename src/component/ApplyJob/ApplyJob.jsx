 



const ApplyJob = ({ job }) => {

 



    // console.log(job)

    const {
        id,
        title,
        description,
        salary,
        application_Number,
        category,
        photo,
        application_Date
    } = job;

    return (


        <tr>

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
            <th>
                <button className="btn btn-primary">Download</button>
            </th>
        </tr>

    );
};

export default ApplyJob;