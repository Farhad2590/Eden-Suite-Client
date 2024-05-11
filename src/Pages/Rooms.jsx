import { useLoaderData } from "react-router-dom";
import RoomsCard from "../components/Rooms/RoomsCard";


const Rooms = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className = ' container px-6 py-10 mx-auto'>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    data.map(rooms => <RoomsCard rooms={rooms}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;