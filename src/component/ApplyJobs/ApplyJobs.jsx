import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { LiaSortDownSolid } from "react-icons/lia";



const ApplyJobs = () => {

    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    const [store, setStore] = useState([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/applyJobss/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItem(data)
                setStore(data)

            });
    }, [user])




    const handleSortBtn = (filter) => {

        if (filter === 'On-Site') {
            // item.sort((a, b) => b.category - a.category);
            setStore([...item])
        }
 
        return item


    }

// console.log(store)




    // console.log(item)


    return (
        <div>
            <h1 className="text-5xl text-red-400">Apply Jobs : {item.length}</h1>


            <div className="text-center mt-8">

                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1  bg-[#23BE0A] px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Sort By  <LiaSortDownSolid className="text-2xl" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortBtn('On-Site')}><a>On Site</a></li>
                    </ul>
                </div>

            </div>

            {
                store.map(s => console.log(s))
            }


        </div>
    );
};

export default ApplyJobs;