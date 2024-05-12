// import { useLoaderData } from "react-router-dom";
// import RoomsCard from "../components/Rooms/RoomsCard";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [sort, setSort] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const { data } = await axios(`${import.meta.env.VITE_URL}/rooms?sort=${sort}`);
    //             setRooms(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, [sort]);
    useEffect(() => {
        const fetchData = async () => {

            const { data } = await axios(`${import.meta.env.VITE_URL}/rooms`);
            let sortedData = data;

            if (sort === 'asc') {
                sortedData = data.slice().sort((a, b) => a.price_per_night - b.price_per_night);
            } else if (sort === 'desc') {
                sortedData = data.slice().sort((a, b) => b.price_per_night - a.price_per_night);
            }

            setRooms(sortedData);

        };

        fetchData();
    }, [sort]);
    console.log(rooms);

    return (
        <div className="bg-[#ebefeb]">
            <div className='container px-6 py-10 mx-auto'>
                <div>
                    <select
                        onChange={e => setSort(e.target.value)}
                        value={sort}
                        className='border p-4 rounded-md'
                    >
                        <option value=''>Sort By Price</option>
                        <option value='asc'>Low to High</option>
                        <option value='desc'>High to Low</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {rooms.map(room => (
                        <Link key={room._id} to={`/rooms/${room._id}`} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img className="object-cover object-center w-full h-56" src={room.banner_image} alt="avatar" />

                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <AiTwotoneDollarCircle />
                                <h1 className="mx-3 text-lg font-semibold text-white">Per-Night/{room.price_per_night}</h1>
                            </div>

                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{room.title}</h1>

                                <p className="py-2 text-gray-700 dark:text-gray-400">{room.features_paragraph}</p>


                                <div className="">
                                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <GoPeople className="text-2xl" />
                                        <h1 className="px-2 text-xl"> | Max Guest:{room.max_guests}</h1>
                                    </div>

                                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <LuBedSingle className="text-2xl" />
                                        <h1 className="px-2 text-xl"> | Beds: {room.beds}</h1>
                                    </div>

                                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <SlSizeFullscreen className="text-2xl" />
                                        <h1 className="px-2 text-xl"> | Size :{room.room_size}</h1>
                                    </div>
                                </div>

                                {/* <div >
                    <a
                        className="px-8 py-4"
                        style={{
                            borderColor: '#fad44a',
                            backgroundColor: '#fad44a',
                            color: '#050d24',
                            WebkitClipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
                            clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
                            fontWeight: '800',
                            fontSize: '1.1rem'
                        }}
                    >
                        Book Now
                    </a>
                </div> */}
                            </div>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;