import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateJob = () => {

    const job = useLoaderData();
    // console.log(job)
    const { user } = useContext(AuthContext)

    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();


    const {_id} = job;

    const {
        register,
        handleSubmit,
        formState: { errors },
        // clearErrors
    } = useForm()


    const onSubmit = data => {

        fetch(`${import.meta.env.VITE_API}/allJobs/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: "Congratulations!",
                        text: " Job Update Successfully",
                        icon: "success"
                    });

                    navigate('/myJobs')
                }

            })
    }


    return (
        <div className="  mx-auto container   mt-10" style={{ boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}    >


            <div className="    shadow-2xl bg-base-100   p-10 space-y-6 rounded-xl container mx-auto   border-red-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}  >

                <label className="label  ">
                    <span className="label-text text-2xl font-bold text-center md:ml-48 lg:ml-[650px]">Update Job</span>
                </label>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <div className="border border-blue-300   focus:dark:border-blue-500">
                                <input type="text" name="username" id="username" defaultValue={user.displayName} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />
                            </div>


                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Email</span>
                            </label>
                            <div className="border border-blue-300   focus:dark:border-blue-500 lg:ml-4">
                                <input type="text" name="email" id="email" defaultValue={user.email} className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />

                            </div>


                        </div>

                    </div>

                    <div className="lg:flex justify-center">


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Job Title</span>
                            </label>
                            <div>
                                <input type="text" name="job_title" id="job_title" defaultValue={job.job_title} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("job_title", { required: true })} />
                            </div>
                            {errors.job_title && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Photo URL</span>
                            </label>
                            <div  >
                                <input type="text" name="photo" id="photo" defaultValue={job.photo} className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("photo", { required: true })} />

                            </div>
                            {errors.photo && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}

                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Salary range</span>
                            </label>
                            <div>
                                <input type="number" name="salary" id="salary" defaultValue={job.salary} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("salary", { required: true })} />
                            </div>
                            {errors.salary && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>



                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold lg:ml-4">Job Category</span>
                            </label>
                            <select className="select select-primary w-full lg:ml-4  lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" name="country" defaultValue={job.category} id="country" {...register("category", { required: true })}>
                                <option disabled selected>Category</option>
                                <option>On Site</option>
                                <option>Remote</option>
                                <option>Part-Time</option>
                                <option>Hybrid</option>
                            </select>
                            {errors.category && <span className="text-red-600 font-bold">This field is required</span>}
                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Job Posting Date</span>
                            </label>
                            <div>
                                <input type="date" name="posting_Date" id="posting_Date" defaultValue={job.posting_Date} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("posting_Date", { required: true })} />
                            </div>
                            {errors.posting_Date && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold lg:ml-4">Application Deadline</span>
                            </label>
                            <div>
                                <DatePicker

                                    selected={startDate} onChange={(date) => setStartDate(date)}
                                    className="input input-bordered lg:w-[600px] w-full ml-4   border-blue-300   focus:dark:border-blue-500 
                                    dark:bg-gray-400"
                                    name="application_Date"
                                    id="application_Date"

                                >
                                </DatePicker>



                            </div>
                            {/* {errors.application_Date && <span className="text-red-600 font-bold ml-4">This field is required</span>} */}



                        </div>


                    </div>
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm"  >
                            <label className="label">
                                <span className="label-text font-bold">Job Applicants Number</span>
                            </label>
                            <div>
                                <input type="number" name="application_Number" id="application_Number" defaultValue={job.application_Number} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("application_Number", { required: true })} />
                            </div>
                            {errors.application_Number && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm"  >
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Short Description</span>
                            </label>
                            <div  >
                                <textarea className="textarea textarea-primary ml-4 input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" defaultValue={job.description} name="description" id="description" {...register("description", { required: true })}></textarea>
                                {errors.description && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}

                            </div>

                        </div>

                    </div>


                    <button className="btn w-full hover:outline text-[16px] bg-primary hover:bg-transparent text-white hover:text-black mr-3"  >Update Job</button>

                </form>






            </div >





        </div >
    );
};

export default UpdateJob;