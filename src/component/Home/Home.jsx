import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TabsCategories from "../TabsCategories/TabsCategories";
import Subscribe from "../Subscribe/Subscribe";
import Candidates from "../Candidates/Candidates";
import Integrate from "../Integrate/Integrate";

 

const Home = () => {
    const allJobs = useLoaderData();
    // console.log(allJobs)
    return (
        <div>

            <Banner></Banner>
            <TabsCategories allJobs={allJobs}></TabsCategories>
            <Integrate></Integrate>
            <Candidates></Candidates>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;