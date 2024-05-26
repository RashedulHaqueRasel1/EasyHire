import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import googleIcon from "../../../public/google.png"


const LogIn = () => {

    const { signIn} = useContext(AuthContext);
    const { singWithGoogle } = useContext(AuthContext)
    const [errorPassword, setErrorPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {


        const { email, password } = data;


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



        // signIn User

        signIn(email, password)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser)

                // const user = { email }
                navigate(location?.state ? location?.state : '/')

            })
            .catch(error => {
                console.log(error)
            })

    }



    // // Google Sing in
    const handleGoogleSignIn = () => {

        singWithGoogle()

            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Log In Success",
                    text: "You clicked the button!",
                    icon: "success"
                });

                // Page Change
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.log(error.code)
            })


    }


    return (
        <div>

            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 font-bold opacity-60">Sign in to access your account and continue your journey with us.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-blue-200    hover:bg-blue-200 " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}  >
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered border border-blue-300  " {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="label flex items-center gap-2 input input-bordered border border-blue-300     ">
                                    <input

                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        {...register("password", { required: true })}

                                    />


                                    <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                        {
                                            showPassword ? <FaRegEye className="ml-16" /> : <FaRegEyeSlash className="ml-16" />
                                        }
                                    </span>
                                    {
                                        errorPassword && <p>{errorPassword}</p>
                                    }
                                </label>
                                {errors.password && <span className="text-red-600 font-bold">This field is required</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div>
                            <p className=" text-center sm:px-6 font-bold text-[14px] dark:text-gray-600">Don t have an account?
                                <NavLink to={'/registration'} className="link link-hover  text-rose-700">Sign up</NavLink>
                            </p>
                        </div>
                        <div>
                            <button aria-label="Log in with Google" onClick={handleGoogleSignIn} className="p-4 w-full  rounded-3xl bg-primary hover:bg-transparent hover:outline text-white hover:text-black mr-3 mt-4" >

                                <div className="flex justify-center">
                                    <img src={googleIcon} className="w-[8%]" alt="" />
                                    <h1 className="text-center mt-1 font-semibold ml-2">Continue With Google</h1>
                                </div>


                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    );
};

export default LogIn;