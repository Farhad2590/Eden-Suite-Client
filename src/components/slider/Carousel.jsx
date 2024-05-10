
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgimg1 from '../../assets/Slider1.jpg'
import bgimg2 from '../../assets/Slider2.jpg'
import bgimg3 from '../../assets/Slider3.jpg'
import bgimg4 from '../../assets/Slider4.jpg'
import bgimg5 from '../../assets/Slider5.jpg'
import bgimg6 from '../../assets/Slider6.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text1='WellCome To'
                        text='Hotel Master'
                        text3='Best Hotel Deals In Town'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text1='WellCome To'
                        text='Hotel Master'
                        text3='Best Hotel Deals In Town'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text1='WellCome To'
                        text='Hotel Master'
                        text3='Best Hotel Deals In Town'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg4}
                        text1='WellCome To'
                        text='Hotel Master'
                        text3='Best Hotel Deals In Town'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg5}
                        text1='WellCome To'
                        text='Hotel Master'
                        text3='Best Hotel Deals In Town'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg6}
                        text1='WellCome To'
                        text='Hotel Master'
                        text3='Best Hotel Deals In Town'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
