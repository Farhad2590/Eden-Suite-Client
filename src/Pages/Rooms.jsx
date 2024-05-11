// import { useLoaderData } from "react-router-dom";
import RoomsCard from "../components/Rooms/RoomsCard";
import { useEffect, useState } from "react";
import axios from 'axios'


const Rooms = () => {
    // const data = useLoaderData()
    const [room, setRooms] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_URL}/rooms`)
            setRooms(data)
        }
        getData()
    }, [])
    console.log(room);
    return (
        <div className=' container px-6 py-10 mx-auto'>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    room.map(rooms => <RoomsCard key={rooms._id} rooms={rooms}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;