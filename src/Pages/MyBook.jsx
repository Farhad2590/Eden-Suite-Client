// import { useContext, useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { IoMdPerson } from "react-icons/io";
// import { Link } from "react-router-dom";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

// const MyBook = () => {
//     const [startDate, setStartDate] = useState(new Date(deadline || new Date()))
//     const [items, setItems] = useState([])
//     const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
//     const [isOpen, setIsOpen] = useState(false);
//     const { user } = useContext(AuthContext)
//     const name = user?.displayName;
//     const email = user?.email;
//     const image = user?.photoURL;
//     console.log(user);
//     useEffect(() => {
//         getData()
//         // getDataRooms()
//     }, [user])
//     const getData = async () => {
//         const { data } = await axios(`${import.meta.env.VITE_URL}/myBooking/${user?.email}`)
//         setItems(data);
//     }

//     const handleFormSubmission = async e => {
//         e.preventDefault()
//         const deadline = startDate
//         const email = user?.email
//         const BookData = {
//             deadline,
//             email,
//         }
//         try {
//             const { data } = await axios.put(
//                 `${import.meta.env.VITE_URL}/rooms/${id}`,
//                 BookData
//             )
//             console.log(data)


//         } catch (err) {
//             console.log(err)

//         }
//     }
//     const handleDelete = async (id, bookingId) => {
//         console.log(id, bookingId);
//         const bookingData = {
//             availability: 'unAvailable',
//         }
//         try {
//             const confirmation = await Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, delete it!"
//             });
//             if (confirmation.isConfirmed) {

//                 const { data } = await axios.delete(`${import.meta.env.VITE_URL}/myBooking/${id}`)
//                 console.log(data)
//                 const { data: update } = await axios.put(`${import.meta.env.VITE_URL}/rooms/${bookingId}`, bookingData)
//                 console.log(update);
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Cancel Successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                 });
//             }

//             //refresh ui
//             getData()
//         } catch (err) {
//             console.log(err.message)
//             // toast.error(err.message)
//         }
//     }
//     const handleReviewSubmit = async e => {
//         e.preventDefault()
//         const form = e.target
//         const comment_text = form.comment_text.value;
//         const rating = form.rating.value;
//         const timestamp = new Date().toISOString();

//         // const roomTitel = items.title;
//         const reviewData = {
//             comment_text, rating, timestamp: timestamp, name, email, image, title: selectedRoomTitle,
//         }
//         console.log(reviewData);
//         try {
//             const { data } = await axios.post(
//                 `${import.meta.env.VITE_URL}/review`, reviewData)
//             console.log(data)
//             Swal.fire({
//                 title: 'Success!',
//                 text: ' Review Posted Successfully',
//                 icon: 'success',
//                 confirmButtonText: 'Cool'
//             })
//             setIsOpen(false)
//         } catch (err) {
//             console.log(err)
//         }
//     }
//     return (
//         <div className='bg-[#ebefeb]  flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
//             <div className="max-w-5xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
//                 {items.map((list) => (
//                     <div key={list._id} className=" flex lg:w-full  rounded-2xl border  border-dashed p-2 ">
//                         <div className="lg:w-[50%]">
//                             <img src={list.banner_image} alt="" />
//                         </div>
//                         <div className="lg:w-[50%] space-y-6 pl-5">
//                             <h1 className="text-4xl pt-5">{list.title}</h1>

//                             <p>{list.features_paragraph}</p>
//                             <p>{new Date(list.bookingFrom).toLocaleDateString()}</p>
//                             <div className="flex items-center">
//                                 <IoMdPerson className="text-3xl" />
//                                 <div className="text-xl">
//                                     Max Guests : {list.max_guests}
//                                 </div>
//                             </div>
//                             <p className="text-xl">Room Stastus : {list.availability}</p>
//                             <p className="text-xl">Room Stastus : {list.deadline}</p>
//                             <div className="gap-3">
//                                 <button onClick={() => { setIsOpen(true); setSelectedRoomTitle(list.title); }} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
//                                     Review
//                                 </button>
//                                 {/* <button onClick={() => setIsOpens(true)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
//                                 </button>
//                                 <div className='flex items-center gap-x-6'>
//                                     <Link to={`/update/${list._id}`}>
//                                         <button className='btn bg-green-500 text-white'>
//                                             Update Date
//                                         </button>
//                                     </Link>
//                                 </div> */}
//                                 <div className="relative flex justify-center">
//                                     <div className="p-5">
//                                         <form onSubmit={handleFormSubmission}>
//                                             {/* Open the modal using document.getElementById('ID').showModal() method */}
//                                             <button type="button" className="btn bg-blue-700 text-white w-full mt-5 mb-5 ml-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
//                                             <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                                                 <div className="modal-box">
//                                                     <h3 className="font-bold text-lg">Hello!</h3>
//                                                     <div className='flex flex-col gap-2 ml-3 mt-5'>
//                                                         <label className='text-gray-700'>Deadline</label>

//                                                         {/* Date Picker Input Field */}
//                                                         <DatePicker
//                                                             className='border p-2 w-full rounded-md'
//                                                             selected={startDate}
//                                                             onChange={date => setStartDate(date)} />
//                                                     </div>
//                                                     <button
//                                                         type='submit'
//                                                         className='bg-blue-700 text-white btn mt-5'>
//                                                         Confirm
//                                                     </button>
//                                                     <div className="modal-action">
//                                                         <form method="dialog">
//                                                             {/* if there is a button in form, it will close the modal */}
//                                                             <button className="btn">Close</button>
//                                                         </form>
//                                                     </div>
//                                                 </div>
//                                             </dialog>
//                                         </form>
//                                     </div>


//                                 </div>
//                                 <button onClick={() => handleDelete(list._id, list.bookingId)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>))}

//                 {/* Modal for Review Form */}
//                 {isOpen && (
//                     <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//                         <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//                             <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
//                             <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
//                                 <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
//                                     Review Room
//                                 </h3>
//                                 <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
//                                     <label className="block mt-3" htmlFor="email">User Name</label>
//                                     <input type="text" name="text" id="text" placeholder="user@email.xyz" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

//                                     <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
//                                     <textarea
//                                         name="comment_text"
//                                         id="commentText"
//                                         placeholder="Write Comment"
//                                         className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//                                     />

//                                     <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
//                                         Rating (1-5)
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="rating"
//                                         id="rating"
//                                         min="1"
//                                         max="5"
//                                         required
//                                         className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//                                     />

//                                     <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
//                                         <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
//                                             Cancel
//                                         </button>
//                                         <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </div >
//     );
// };

// export default MyBook;

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from "../provider/AuthProvider";

const MyBook = () => {

    const [items, setItems] = useState([])
    const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
    const [Id, setId] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext)
    const name = user?.displayName;
    const email = user.email;
    const image = user?.photoURL;

    // const bookId = items.bookId
    console.log(email);
    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_URL}/myBooking/${user?.email}`)
        setItems(data);
    }


    const handleDelete = async (id, bookingId) => {
        const bookingData = {
            availability: 'Available',
        }
        try {
            const confirmation = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });
            if (confirmation.isConfirmed) {
                const { data } = await axios.delete(`${import.meta.env.VITE_URL}/myBooking/${id}`)
                console.log(data)
                const { data: update } = await axios.put(`${import.meta.env.VITE_URL}/roomsCancel/${bookingId}`, bookingData)
                console.log(update);
                Swal.fire({
                    title: 'Success!',
                    text: 'Cancel Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
            getData()
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleReviewSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const comment_text = form.comment_text.value;
        const rating = form.rating.value;
        const timestamp = new Date().toISOString();
        console.log(Id);
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
    const handleButtonClick = (list) => {
        setIsOpen(true);
        setSelectedRoomTitle(list.title);
        setId(list.bookingId);
    }

    return (
        <div className='bg-[#ebefeb] flex flex-col md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto'>
            <div className="max-w-5xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                {items.map((list) => (
                    <div key={list._id} className="flex lg:w-full rounded-2xl border border-dashed p-2">
                        <div className="lg:w-[50%]">
                            <img src={list.banner_image} alt="" />
                        </div>
                        <div className="lg:w-[50%] space-y-6 pl-5">
                            <h1 className="text-4xl pt-5">{list.title}</h1>
                            <p>{list.features_paragraph}</p>
                            <p>{new Date(list.bookingFrom).toLocaleDateString()}</p>
                            <div className="flex items-center">
                                <IoMdPerson className="text-3xl" />
                                <div className="text-xl">
                                    Max Guests : {list.max_guests}
                                </div>
                            </div>
                            <p className="text-xl">Room Status : {list.availability}</p>
                            <p className="text-xl">Deadline : {list.deadline}</p>
                            <div className="flex items-center">
                                <button onClick={() => handleButtonClick(list)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Review
                                </button>

                                <div className="relative flex justify-center">
                                    <div className="p-5">
                                        <Link to={`/update/${list._id}`}>
                                            <button className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">Update Now</button>
                                        </Link>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(list._id, list.bookingId)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {isOpen && (
                    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                    Review Room
                                </h3>
                                <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
                                    <label className="block mt-3" htmlFor="text">User Name</label>
                                    <input type="text" name="text" id="text" placeholder="user@email.xyz" value={name} onChange={e => setName(e.target.value)} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
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
            </div>
        </div>

    );
};

export default MyBook;
