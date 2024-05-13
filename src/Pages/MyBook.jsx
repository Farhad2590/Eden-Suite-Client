import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { IoMdPerson } from "react-icons/io";

const MyBook = () => {
    // const loaderData = useLoaderData()
    const [items, setItems] = useState([]);
    const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const [bookingFrom, setBookingFrom] = useState('');
    const [bookingTo, setBookingTo] = useState('');
    const { user } = useContext(AuthContext)
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    console.log(user);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_URL}/myBooking/${user?.email}`)
            setItems(data);
        }
        getData()
    }, [user])
    console.log(items);

    const handleCancelNow = async id => {
        console.log(id);
        const bookingData = {
            availability: 'Available',
        }
        console.log(bookingData);
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_URL}/rooms/${id}`, bookingData)
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: ' Cancel Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
    const handleReviewSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const comment_text = form.comment_text.value;
        const rating = form.rating.value;
        const timestamp = new Date().toISOString();

        // const roomTitel = items.title;
        const reviewData = {
            comment_text, rating, timestamp: timestamp, name, email, image, title: selectedRoomTitle,
        }
        console.log(reviewData);
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_URL}/review`, reviewData)
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: ' Review Posted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            setIsOpen(false)
        } catch (err) {
            console.log(err)
        }
    }
    const handleUpdateNow = async id => {
        console.log(id);
        const bookingData = {
            bookingFrom,
            bookingTo,
            availability: 'unAvailable',
            email
        }
        console.log(bookingData);
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_URL}/rooms/${id}`, bookingData)
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: ' Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='bg-[#ebefeb]  flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            <div className="max-w-5xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                {items.map((list) => (
                    <div key={list._id} className=" flex lg:w-full  rounded-2xl border  border-dashed p-2 ">
                        <div className="lg:w-[50%]">
                            <img src={list.banner_image} alt="" />
                        </div>
                        <div className="lg:w-[50%] space-y-6 pl-5">
                            <h1 className="text-4xl pt-5">{list.title}</h1>

                            <p>{list.features_paragraph}</p>
                            <div className="flex items-center">
                                <IoMdPerson className="text-3xl" />
                                <div className="text-xl">
                                    Max Guests : {list.max_guests}
                                </div>
                            </div>
                            <p className="text-xl">Room Stastus : {list.availability}</p>
                            <div className="gap-3">
                                <button onClick={() => { setIsOpen(true); setSelectedRoomTitle(list.title); }} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Review
                                    {/* Modal for Review Form */}
                                    {isOpen && (
                                        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                                                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                                        Review Room
                                                    </h3>
                                                    <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
                                                        <label className="block mt-3" htmlFor="email">User Name</label>
                                                        <input type="text" name="text" id="text" placeholder="user@email.xyz" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                                                        <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
                                                        <textarea
                                                            name="comment_text"
                                                            id="commentText"
                                                            placeholder="Write Comment"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />

                                                        <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
                                                            Rating (1-5)
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="rating"
                                                            id="rating"
                                                            min="1"
                                                            max="5"
                                                            required
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />

                                                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                                            <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                                                Cancel
                                                            </button>

                                                            <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </button>
                                <button onClick={() => setIsOpens(true)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Update Now
                                </button>
                                {/* Modal for Update Form */}
                                {isOpens && (
                                    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                                <div className="flex items-center justify-between">
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
                                                    <div className='flex flex-col '>
                                                        <label className='text-gray-700'>To</label>
                                                        <input
                                                            type="date"
                                                            name="bookingTo"
                                                            id="bookingTo"
                                                            value={bookingTo}
                                                            required
                                                            onChange={(e) => setBookingTo(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                                                    <a href="#" className="text-sm text-blue-500 hover:underline">Learn more</a>

                                                    <div className="sm:flex sm:items-center ">
                                                        <button onClick={() => setIsOpens(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                                            Cancel
                                                        </button>

                                                        <button onClick={() => handleUpdateNow(list._id)} className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
                                                            Update
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <button onClick={() => handleCancelNow(list._id)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>))}

            </div>
        </div >
    );
};

export default MyBook;