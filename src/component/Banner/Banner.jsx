// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const Banner = () => {
    return (


        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <>
                        <div
                            className='w-full bg-center bg-cover h-[34rem] lg:h-[44rem]'
                            style={{
                                backgroundImage: `url("https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                            }}>

                            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
 
                                    <Link to={'/'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">On-Site Job</span>
                                    </Link>
                                    <br />
                                    <p className='text-white opacity-50 mt-4'>On-site jobs require employees to work at a specific location, such as an office or store. These roles offer direct interaction with colleagues and <br /> clients, access to company resources, and a structured work environment.</p>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>
                        <div
                            className='w-full bg-center bg-cover h-[34rem] lg:h-[44rem]'
                            style={{
                                backgroundImage: `url("https://images.unsplash.com/photo-1527792492728-08d07d011113?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                            }}>

                            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
 
                                    <Link to={'/'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Remote Job</span>
                                    </Link>
                                    <br />
                                    <p className='text-white opacity-50 mt-4'>Remote jobs offer the flexibility to work from any location. Ideal for self-motivated individuals, these roles use digital tools for communication and <br /> collaboration, providing an excellent work-life balance.</p>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>

                <SwiperSlide>
                    <>
                        <div
                            className='w-full bg-center bg-cover h-[34rem] lg:h-[44rem]'
                            style={{
                                backgroundImage: `url("https://images.unsplash.com/photo-1527792931932-443873b57953?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                            }}>

                            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                <Link to={'/'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">On-Site</span>
                                    </Link>
                                    <br />
                                    <p className='text-white opacity-50 mt-4'>Hybrid jobs combine remote and on-site work, offering a balance of flexibility and structure. Employees enjoy the benefits of working from home and <br /> the collaborative environment of an office.</p>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>
                        <div
                            className='w-full bg-center bg-cover h-[34rem] lg:h-[44rem]'
                            style={{
                                backgroundImage: `url("https://images.unsplash.com/photo-1589942466913-4bb9d61c6a7b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                            }}>

                            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <Link to={'/'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Part-Time</span>
                                    </Link>
                                    <br />
                                    <p className='text-white opacity-50 mt-4'>Part-time jobs require fewer hours per week, providing flexible scheduling. Perfect for students, parents, and those seeking additional income,<br /> these roles offer a balance between work and personal life.</p>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>

            </Swiper>
        </>

    )
}

export default Banner;