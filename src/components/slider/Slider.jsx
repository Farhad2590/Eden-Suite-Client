
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'
import bgimg1 from '../../assets/Slider1.jpg'
import bgimg2 from '../../assets/Slider2.jpg'
import bgimg3 from '../../assets/Slider3.jpg'
import bgimg4 from '../../assets/Slider4.jpg'
import bgimg5 from '../../assets/Slider5.jpg'
import bgimg6 from '../../assets/Slider6.jpg'
import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            cssMode={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src={bgimg1} />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Welcome to:
                        <span className="text-white font-bold ">
                            <Typewriter
                                words={['Hotel Master']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <h6 className='text-base font-semibold text-white lg:text-xl'>
                        Best Hotel Deals In Town
                    </h6>
                    <Link to="/rooms" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Explore Rooms
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src={bgimg2} />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Welcome to:
                        <span className="text-white font-bold ">
                            <Typewriter
                                words={['Hotel Master']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <h6 className='text-base font-semibold text-white lg:text-xl'>
                        Best Hotel Deals In Town
                    </h6>
                    <Link to="/rooms" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Explore Rooms
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src={bgimg3} />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Welcome to:
                        <span className="text-white font-bold ">
                            <Typewriter
                                words={['Hotel Master']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <h6 className='text-base font-semibold text-white lg:text-xl'>
                        Best Hotel Deals In Town
                    </h6>
                    <Link to="/rooms" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Explore Rooms
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src={bgimg4} />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Welcome to:
                        <span className="text-white font-bold ">
                            <Typewriter
                                words={['Hotel Master']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <h6 className='text-base font-semibold text-white lg:text-xl'>
                        Best Hotel Deals In Town
                    </h6>
                    <Link to="/rooms" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Explore Rooms
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src={bgimg5} />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Welcome to:
                        <span className="text-white font-bold ">
                            <Typewriter
                                words={['Hotel Master']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <h6 className='text-base font-semibold text-white lg:text-xl'>
                        Best Hotel Deals In Town
                    </h6>
                    <Link to="/rooms" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Explore Rooms
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src={bgimg6} />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Welcome to:
                        <span className="text-white font-bold ">
                            <Typewriter
                                words={['Hotel Master']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <h6 className='text-base font-semibold text-white lg:text-xl'>
                        Best Hotel Deals In Town
                    </h6>
                    <Link to="/rooms" className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Explore Rooms
                    </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;