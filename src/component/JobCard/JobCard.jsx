
const JobCard = ({ allJob }) => {

    // console.log(allJob)

    const {
        name_posted,
        job_title,
        posting_date,
        application_deadline,
        type,
        salary_range,
        applicants_number } = allJob;


    return (
        <div>



            <div className='w-full max-w-sm px-4 py-3 mt-8 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all ' 
            style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                <div className='flex items-center justify-between'>
                    <span className='text-xs font-light text-gray-800 '>
                        {posting_date}
                    </span>
                    <span className='px-3 py-1 text-[14px] text-primary uppercase bg-blue-200 rounded-full '>
                        {type}
                    </span>
                </div>

                <div className=" ">
                    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                        {job_title}
                    </h1>

                    <p className='mt-2 text-sm text-gray-600 '>
                        {name_posted}
                    </p>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        {salary_range}
                    </p>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Application Deadline : {application_deadline}
                    </p>
                </div>

                <div className="flex justify-end mt-4">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>

        </div>
    );
};

export default JobCard;