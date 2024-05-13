import { useLoaderData } from "react-router-dom";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider"
import { useState, useContext } from "react";
import axios from "axios";

const RoomPages = () => {
    const rooms = useLoaderData()
    const [isOpen, setIsOpen] = useState(false);

    const [bookingFrom, setBookingFrom] = useState('');
    // const [bookingTo, setBookingTo] = useState('');
    const { user } = useContext(AuthContext)

    console.log(rooms);
    const { _id, availability, banner_image, price_per_night, room_images, title, features_paragraph, room_description, max_guests, beds, room_size } = rooms
    console.log();
    const email = user?.email;
    const name = user?.displayName;
    const handleBookNowClick = async e => {
        const bookingData = {
            bookingFrom,
            availability: 'unAvailable',
            email,
            name
        }
        console.log(bookingData);
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_URL}/rooms/${_id}`, bookingData)
            console.log(data)
            Swal.fire({
                icon: 'success',
                title: 'Booking successful',
                showConfirmButton: false,
                timer: 1500,
            });
            setIsOpen(false)

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='bg-[#ebefeb]  flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="relative ">
                    <img className="object-cover w-full h-64" src={banner_image} alt="Article" />
                    <div id="one" className="p-2 rounded-b-lg absolute top-0 right-0 flex items-center bg-white">
                        <AiTwotoneDollarCircle className="w-6 h-6" />
                        <h1 className="ml-1 text-lg font-semibold">Per-Night/{price_per_night}</h1>
                    </div>
                </div>

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{room_description}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{features_paragraph}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <GoPeople className="text-2xl" />
                                <h1 className="px-2 text-xl"> | Max Guest:{max_guests}</h1>
                            </div>
                            <div className="flex items-center">
                                <LuBedSingle className="text-2xl" />
                                <h1 className="px-2 text-xl"> | Beds: {beds}</h1>
                            </div>
                            <div className="flex items-center">
                                <SlSizeFullscreen className="text-2xl" />
                                <h1 className="px-2 text-xl"> | Size :{room_size}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <h1 className="px-2 text-xl"> Available : {availability}</h1>
                            </div>
                            <div className="flex items-center">
                                <h1 className="px-2 text-xl"> Reviews:</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2 dark:bg-gray-100">
                    <h1 href="#" className="text-center block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Our {room_description} images</h1>
                    <div className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            {room_images.map((roomImage, index) => (
                                <img key={index} className="object-cover w-full dark:bg-gray-500 aspect-square" src={roomImage} alt={`Room ${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <div className="p-5">
                        <button onClick={() => {
                            if (availability === 'unAvailable') {
                                // Show alert
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Room not available',
                                    text: 'Sorry, this room is boooked',
                                });
                                return;
                            }
                            setIsOpen(true);
                        }} className="w-full bg-[#fad44a] text-black px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black">
                            Confirm Booking
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className="fixed inset-0 z-10 overflow-y-auto"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div className="flex items-center justify-center">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                            </svg> */}
                                        </div>

                                        <div className="mt-2 text-center">
                                            <h3 className="text-lg font-medium leading-10 text-gray-800 capitalize dark:text-white" id="modal-title">{title}</h3>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <GoPeople className="text-xl" />
                                                    <h1 className="px-2 text-lg"> | Max Guest:{max_guests}</h1>
                                                </div>
                                                <div className="flex items-center">
                                                    <LuBedSingle className="text-xl" />
                                                    <h1 className="px-2 text-lg"> | Beds: {beds}</h1>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className="flex items-center">
                                                    <h1 className="px-2 text-lg"> Available : {availability}</h1>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div className='flex flex-col '>
                                                    <label className='text-gray-700'>From</label>
                                                    <input
                                                        type="date"
                                                        name="bookingFrom"
                                                        id="bookingFrom"
                                                        value={bookingFrom}
                                                        required
                                                        onChange={(e) => setBookingFrom(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="mt-5 sm:flex sm:items-center sm:justify-end">
                                        <div className="sm:flex sm:items-center ">
                                            <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                                Cancel
                                            </button>

                                            <button onClick={handleBookNowClick} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >

    );
};

export default RoomPages;