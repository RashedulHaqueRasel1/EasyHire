import { Link } from "react-router-dom";

const JobCard = ({ allJob }) => {

    // console.log(allJob)


    const {
        _id,
        name_posted,
        job_title,
        posting_Date,
        application_Date,
        category,
        salary,
        applicants_number,
        description } = allJob;


    return (
        <div>



            <div className='w-full max-w-sm px-4 py-3 mt-8 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all '
                style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                <div className='flex items-center justify-between'>
                    <span className='text-xs font-light text-gray-800 '>
                    Application Deadline :   {new Date(application_Date).toLocaleDateString('en-GB')}
                    </span>
                    <span className='px-3 py-1 text-[14px] text-primary uppercase bg-blue-200 rounded-full '>
                        {category}
                    </span>
                </div>

                <div className=" ">
                    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                        {job_title}
                    </h1>

                    <p className='mt-2 text-sm text-gray-600 '>
                        {description}
                    </p>
                    <p className='mt-2 text-sm text-gray-600 '>
                        {name_posted}
                    </p>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        {salary}
                    </p>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                         {posting_Date}
                    </p>
                </div>

                <div className="flex justify-end mt-4">
                    <Link to={`/cardDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default JobCard;