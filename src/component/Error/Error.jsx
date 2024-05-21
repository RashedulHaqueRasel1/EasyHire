import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError;
    console.log(error)

    return (
        <div>

            <section className="flex mt-32 items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className=" text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 font-semibold dark:text-gray-600">But don t worry, you can find plenty of other things on our homepage.</p>
                        <NavLink  to={'/'} className="btn  hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3"><IoMdArrowRoundBack></IoMdArrowRoundBack>Back to homepage</NavLink> 
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Error;