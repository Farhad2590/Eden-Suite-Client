import { useLoaderData } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import Swal from 'sweetalert2';

const RoomPages = () => {
    const { user } = useContext(AuthContext);
    const initialRooms = useLoaderData();
    const [rooms, setRooms] = useState(initialRooms);
    const [startDate, setStartDate] = useState(new Date());
    const [review, setReview] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_URL}/review`);
                setReview(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const {
        _id,
        availability,
        banner_image,
        price_per_night,
        room_images,
        title,
        features_paragraph,
        room_description,
        max_guests,
        beds,
        room_size
    } = rooms;

    useEffect(() => {
        setRooms(initialRooms);
    }, [initialRooms]);

    const filteredReview = review.filter(reviews => reviews.room_title === title);

    const deadline = startDate;
    const email = user?.email;
    const name = user?.displayName;

    const handleFormSubmission = async e => {
        e.preventDefault();

        const bookingData = {
            email,
            availability: 'unAvailable',
            name,
            bookingId: [_id], // Ensure this is an array of IDs
            deadline,
            banner_image,
            price_per_night,
            room_images,
            title,
            features_paragraph,
            room_description,
            max_guests,
            beds,
            room_size
        };

        try {
            // First API call to insert booking data
            const { data } = await axios.post(`${import.meta.env.VITE_URL}/mybooking`, bookingData);
            console.log(data);

            // Second API call to update room availability
            await axios.put(`${import.meta.env.VITE_URL}/rooms/${_id}`);

            // Fetch the updated room data
            const updatedRoom = await axios.get(`${import.meta.env.VITE_URL}/rooms/${_id}`);
            setRooms(updatedRoom.data);

            Swal.fire({
                icon: 'success',
                title: 'Booking successful',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            console.log(err);
            console.log('Hi, I am error', err.message);
        }
    };

    return (
        <div>
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
                            </div>
                            <div className="flex items-center flex-col">
                                    <h1 className="px-2 text-xl">Reviews:</h1>
                                    {filteredReview.length > 0 ? (
                                        filteredReview.map((review, index) => (
                                            <div key={index} className="review-item py-2">
                                                {review.comment_text}
                                            </div>
                                        ))
                                    ) : (
                                        <div>No reviews available for this room.</div>
                                    )}
                                </div>
                        </div>
                    </div>
                    <div className="py-2 dark:bg-gray-100">
                        <h1 className="text-center block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Our {room_description} images</h1>
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
                            <form onSubmit={handleFormSubmission}>
                                {
                                    availability === 'unAvailable' ?
                                        <button disabled type="button" className="btn bg-blue-700 text-white w-full mt-5 mb-5 ml-3" >Book Now</button>
                                        :
                                        <button type="button" className="btn bg-blue-700 text-white w-full mt-5 mb-5 ml-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                                }

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <div className='flex flex-col gap-2 ml-3 mt-5'>
                                            <label className='text-gray-700'>Deadline</label>
                                            <DatePicker
                                                className='border p-2 w-full rounded-md'
                                                selected={startDate}
                                                onChange={date => setStartDate(date)} />
                                        </div>
                                        <button
                                            type='submit'
                                            className='bg-blue-700 text-white btn mt-5'>
                                            Confirm
                                        </button>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default RoomPages;
