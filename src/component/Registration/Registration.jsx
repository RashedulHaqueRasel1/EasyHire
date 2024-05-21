import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorPassword, setErrorPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // console.log(createUser)


    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {


        const { email, password, photo, name } = data;




        if (password.length < 6) {
            setErrorPassword("Password should be at least 6 characters or longer ")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorPassword("Your Password Should be Lower Case");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorPassword("Your Password Should be Upper Case");
            return;
        }


        // console.log(data)

        // create User
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                console.log(result.user)
                    .then(() => {
                        Swal.fire({
                            title: "Registration Success",
                            text: "You have Registration Success",
                            icon: "success"
                        });

                        
                        // Page Change
                        navigate('/')



                    })

                // console.log(result.user)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });

                console.error(error)
            })





    }
    return (
        <div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Reg. Now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered border-blue-300"   {...register("name", { required: true })} />

                            </div>
                            {errors.name && <span className="text-red-600 font-bold">This field is required.</span>}


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Your Photo Url" className="input input-bordered border-blue-300"   {...register("photo", { required: true })} />

                            </div>
                            {errors.photo && <span className="text-red-600 font-bold">This field is required.</span>}



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered border-blue-300" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="label flex items-center mt-2 gap-2 input input-bordered border border-blue-300     ">


                                    <input

                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        // className=""

                                        data-aos="fade-up" data-aos-duration="2900"
                                        {...register("password", { required: true })}
                                    />


                                    <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                        {
                                            showPassword ? <FaRegEye className="ml-20" /> : <FaRegEyeSlash className="ml-20" />
                                        }
                                    </span>
                                </label>
                                {errors.password && <span className="text-red-600 font-bold">This field is required.</span>}
                                {
                                    errorPassword && <p>{errorPassword}</p>
                                }


                                <label className="label mt-6">
                                    <h1>Already Have Account? <Link to={'/logIn'} className="link link-hover  font-semibold text-rose-700">Login</Link> </h1>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;