
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Candidate from './Candidate';


const Candidates = () => {


    return (
        <>

            <div className='my-8 '>
                <div className="text-center rounded-lg my-8">
                    <h2 className="text-2xl lg:text-4xl text-primary-text-color font-extrabold ">Featured Candidates</h2>
                    <p className="font-medium opacity-60 mt-6 text-sm px-8 lg:p-0 lg:text-lg mx-auto  w-full lg:w-2/4">
                        Meet our Featured Candidates, top talent actively seeking new opportunities across various industries. These exceptional professionals come with impressive backgrounds, diverse skill sets, and a proven track record of success.</p>
                </div>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?1' name='Charles' category='Senior Web Developer' exp='6 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?2' name='Michael' category='Senior Marketing Expert' exp='4 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?3' name='Joseph' category='Senior UI/UX Designer' exp='8 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?4' name='Daniel' category='Senior React Developer' exp='3 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?5' name='James' category='Web Developer' exp='5 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?6' name='William' category='Marketing Expert' exp='2 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?7' name='Robert' category='Web Developer' exp='5 Yrs Exp.'></Candidate>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Candidate image='https://source.unsplash.com/150x150/?portrait?8' name='Donald' category='Social Media Expert' exp='1 Yrs Exp.'></Candidate>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Candidates;