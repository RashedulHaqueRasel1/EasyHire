import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Profile = () => {
    const { user } = useContext(AuthContext)

    // console.log(user)



    return (
        <div>

            <div className="w-full card shrink-0 mt-24 mb-28 h-96  max-w-sm shadow-2xl bg-base-100 border-2 border-blue-200    hover:bg-blue-200  p-8 space-y-3 rounded-xl container mx-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} >
                <img src={user.photoURL} alt="" className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className=" text-4xl font-semibold h-full   mt-5">{user.displayName || 'Not Found'}</h2>
                        <p className="px-5   text-2xl  dark:text-gray-600 mt-20">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;