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
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_URL}/rooms`, {
                    params: {
                        minPrice,
                        maxPrice
                    }
                });
                setRooms(data);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [minPrice, maxPrice]);

    console.log(rooms);


    return (
        <div className="bg-[#ebefeb] min-h-screen">
        <div className="container px-4 py-10 mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                    <label className="text-gray-700">
                        Min Price:
                    </label>
                    <input
                        className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                    <label className="text-gray-700">
                        Max Price:
                    </label>
                    <input
                        className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center mt-8">
                    <p className="text-gray-700">Loading...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {rooms
                        .filter(room => room.availability === "Available")
                        .map(room => (
                            <Link
                                key={room._id}
                                to={`/rooms/${room._id}`}
                                className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <img
                                    className="object-cover object-center w-full h-56"
                                    src={room.banner_image}
                                    alt="avatar"
                                />
                                <div className="flex items-center px-6 py-3 bg-gray-900">
                                    <AiTwotoneDollarCircle className="text-white text-2xl" />
                                    <h1 className="mx-3 text-lg font-semibold text-white">
                                        Per-Night/${room.price_per_night}
                                    </h1>
                                </div>
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {room.title}
                                    </h1>
                                    <p className="py-2 text-gray-700 dark:text-gray-400">
                                        {room.features_paragraph}
                                    </p>
                                    <div>
                                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                            <GoPeople className="text-2xl" />
                                            <h1 className="px-2 text-xl">
                                                | Max Guest: {room.max_guests}
                                            </h1>
                                        </div>
                                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                            <LuBedSingle className="text-2xl" />
                                            <h1 className="px-2 text-xl">
                                                | Beds: {room.beds}
                                            </h1>
                                        </div>
                                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                            <SlSizeFullscreen className="text-2xl" />
                                            <h1 className="px-2 text-xl">
                                                | Size: {room.room_size}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    </div>
    
    );
};

export default Rooms;