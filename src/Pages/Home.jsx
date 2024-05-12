import Carousel from '../components/slider/Carousel'
import TabCategories from '../components/Tabs/TabCategories'

const Home = () => {
    return (
        <div className='bg-[#ebefeb]'>
            <Carousel></Carousel>
            <TabCategories></TabCategories>
        </div>
    );
};

export default Home;