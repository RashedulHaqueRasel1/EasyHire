import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';

const TabsCategories = ({ allJobs }) => {

    // console.log(allJobs)

    return (
        <div className='mb-96'>


            <Tabs>

                <div className="text-center rounded-lg mt-24">
                    <h2 className="text-2xl lg:text-4xl text-primary-text-color font-extrabold ">All Jobs</h2>
                    <p className="font-medium opacity-60 mt-6 text-sm px-8 lg:p-0 lg:text-lg mx-auto  w-full lg:w-2/4">Work at a specific location, such as an office or store, with direct interaction with colleagues and clients. Enjoy access to company resources and a structured environment. Ideal for those who thrive on routine and face-to-face collaboration.</p>
                </div>

                <div className='flex items-center justify-center mt-10'>
                    <TabList>
                        <Tab><span className='font-semibold lg:text-xl'>On-Site Job</span></Tab>
                        <Tab><span className='font-semibold lg:text-xl'>Remote Job</span></Tab>
                        <Tab><span className='font-semibold lg:text-xl'>Hybrid</span></Tab>
                        <Tab><span className='font-semibold lg:text-xl'>Part-Time</span></Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            allJobs.filter(job => job?.category === 'On Site').map(allJob => <JobCard key={allJob._id} allJob={allJob}></JobCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            allJobs.filter(job => job?.category === "Remote").map(allJob => <JobCard key={allJob._id} allJob={allJob}></JobCard>)
                        }
                    </div>
 
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            allJobs.filter(job => job?.category === "Hybrid").map(allJob => <JobCard key={allJob._id} allJob={allJob}></JobCard>)
                        }
                    </div>
  
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            allJobs.filter(job => job?.category === "Part-Time").map(allJob => <JobCard key={allJob._id} allJob={allJob}></JobCard>)
                        }
                    </div>
 
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default TabsCategories;