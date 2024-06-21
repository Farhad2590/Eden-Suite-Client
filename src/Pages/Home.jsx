import Testimonial from '../components/Reviews/Testimonial';
// import Carousel from '../components/slider/Carousel'
import TabCategories from '../components/Tabs/TabCategories'
import Maps from '../components/Maps/Maps'
import Newsletter from '../components/Newseler/Newsletter'
import Slider from '../components/slider/Slider'
const Home = () => {
    return (
        <div className='bg-[#ebefeb]'>
            <div className='container px-2 py-10 mx-auto '>
                {/* <Carousel></Carousel> */}
                <Slider></Slider>
                <Maps></Maps>
                <Newsletter></Newsletter>
                <TabCategories></TabCategories>
                <Testimonial></Testimonial>
            </div>
        </div>

    );
};

export default Home;