
import Testimonial from '../components/Reviews/Testimonial';

import Carousel from '../components/slider/Carousel'

import TabCategories from '../components/Tabs/TabCategories'

const Home = () => {
    return (
        <div className='bg-[#ebefeb]'>
            <Carousel></Carousel>
            <TabCategories></TabCategories>
            
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;