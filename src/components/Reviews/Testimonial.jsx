
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Carousel() {
    const [review, setReview] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_URL}/review`);
                setReview(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(review);
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
            >{
                    review.map(reviews => (<SwiperSlide key={reviews._id}>
                        <Slide
                            image={reviews.image}
                            name={reviews.name}
                            comment_text={reviews.comment_text}
                            text3='Best Hotel Deals In Town'
                        />
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
}
