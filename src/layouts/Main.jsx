import { Outlet } from 'react-router-dom';
import Navbar from '../components/Maps/Navbar'
import Footer from '../components/sharedComponents/Footer'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;