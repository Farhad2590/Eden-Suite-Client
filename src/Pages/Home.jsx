import Testimonial from '../components/Reviews/Testimonial';
// import Carousel from '../components/slider/Carousel'
import TabCategories from '../components/Tabs/TabCategories'
import Maps from '../components/Maps/Maps'
import Newsletter from '../components/Newseler/Newsletter'
import Slider from '../components/slider/Slider'
import { useState } from 'react';
import Modal from 'react-modal';
import { MdOutlineCancelPresentation } from "react-icons/md";
import bgImage from '../assets/BgImage.jpeg'


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    Modal.setAppElement('#root');
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='bg-[#ebefeb]'>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Welcome Modal"
                className="w-full max-w-md rounded-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <div
                    className="flex flex-col items-center bg-cover bg-center rounded-lg p-8"
                    style={{ backgroundImage: `url(${bgImage})` }}>
                    <h2 className="text-2xl mb-4 text-white font-extrabold">Welcome to Eden Suite!</h2>
                    <div className='border-t-8 border-x-8 border-b-[24px] p-5 border- text-center'>
                        <h1 className=' text-4xl font font-extrabold text-white'>30% OFF</h1>
                        <p className='text-white font-bold'>For All Rooms Category</p>
                    </div>
                    <MdOutlineCancelPresentation className="cursor-pointer text-white" onClick={closeModal} size={24} />
                    {/* <button onClick={closeModal}>Close</button> */}
                </div>
            </Modal>

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