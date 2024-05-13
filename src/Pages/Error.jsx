import { Link } from 'react-router-dom';
import error from '../assets/Error 404.png'
const Error = () => {
    return (
        <div className=' w-full h-full flex flex-col items-center justify-center'>
            <img src={error} alt="" />
            <Link to='/' className='btn'>Go Back Home</Link>
        </div>
    );
};

export default Error;