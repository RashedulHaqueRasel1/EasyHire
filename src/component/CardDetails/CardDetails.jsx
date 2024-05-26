import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { useContext} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import {  toast } from "react-toastify"



const CardDetails = () => {

    const jobDetails = useLoaderData();

    // console.log(jobDetails)

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user)
    const { email, displayName } = user;


    // console.log(jobDetails)


    const {
        
        job_title,
        description,
        salary,
        application_Number,
        category,
        photo,
        application_Date
    } = jobDetails;

    // console.log(jobDetails)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const currentDate = new Date();


    const applyDate = new Date(application_Date)

    

    const onSubmit = (data) => {


    
        if ( applyDate.getTime() <  currentDate.getTime()) {
            toast.error("Apply date is Over! Don't Apply This job.")
            return ;
        }





        data.title = job_title;
        data.description = description;
        data.salary = salary;
        data.application_Number = application_Number;
        data.category = category;
        data.photo = photo;


        data.email = email;
        data.name = displayName;



        // send data  MongoDB applyJobs collection 
        fetch(`${import.meta.env.VITE_API}/applyJobs`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        title: "Congratulations!",
                        text: "Job Apply Successfully",
                        icon: "success"
                    });
                    navigate('/')
                }

            })

    }





    return (
        <div className="mx-auto container">


            <section>
                <div className="  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                className="w-full lg:h-[600px]"
                                alt=""
                                src={photo}
                            />
                        </div>

                        <div className="lg:py-24">
                            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                                <dl className="-my-3 divide-y divide-gray-100 text-[16px] font-semibold">

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Job Title : </dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{job_title}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Salary Range :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">$ {salary}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Number of Applicants :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{application_Number}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Job Category :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{category}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Application Date :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{new Date(application_Date).toLocaleDateString('en-GB')}</dd>
                                    </div>


                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Description :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">
                                            {description}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <NavLink to={'/'} className="btn  hover:outline text-[16px] bg-primary hover:bg-transparent text-white hover:text-black mr-3 "><IoMdArrowRoundBack></IoMdArrowRoundBack>Back to homepage</NavLink>






                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn  ml-24  text-[16px] hover:bg-primary outline  text-black   hover:text-white mr-3 " onClick={() => document.getElementById('my_modal_3').showModal()}>Apply Job<IoMdAddCircle></IoMdAddCircle></button>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-primary text-2xl btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>


                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                    <label className="label">
                                        <span className="label-text font-bold">Your Name</span>
                                    </label>
                                    <div className="border border-blue-300   focus:dark:border-blue-500">
                                        <input type="text" name="username" id="username" defaultValue={user?.displayName} className="input input-bordered  w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />
                                    </div>
                                </div>


                                <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                    <label className="label">
                                        <span className="label-text   font-bold">Email</span>
                                    </label>
                                    <div className="border border-blue-300   focus:dark:border-blue-500  ">
                                        <input type="text" name="email" id="email" defaultValue={user?.email} className="input input-bordered     w-full    border-blue-300 bg-blue-200  focus:dark:border-blue-500 dark:bg-gray-400" disabled />
                                    </div>
                                </div>


                                <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                    <label className="label">
                                        <span className="label-text   font-bold">Submit Your Resume link</span>
                                    </label>
                                    <div className=" ">

                                        <input type="text" name="" id=" " placeholder="submit resume link" className="input input-bordered     w-full    border-blue-300   focus:dark:border-blue-500  bg-blue-200 mt-4" {...register("resume", { required: true })} />
                                    </div>
                                    {errors.resume && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}
                                </div>



                               
                                       
                                        <div className="text-center ">
                                            <button className="btn btn-primary mt-6">submit</button>
                                        </div>
                                    
                                
                            </form>
                        </div>
                    </dialog>


                </div>






            </section>

        </div>
    );
};

export default CardDetails;