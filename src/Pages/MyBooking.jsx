import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";




const MyBooking = () => {
    // const loaderData = useLoaderData()
    const [items, setItems] = useState([]);

    const [isOpens, setIsOpens] = useState(false);
    const { user } = useContext(AuthContext)
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
                    text: ' Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                getData();
            }


        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="bg-orange-100">
            <h1 className="text-3xl text-center text-[#a86a60] py-5">All Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-auto">
                    <thead>
                        <tr>
                            <th className="hidden md:table-cell">Sl No.</th>
                            <th className="w-full md:w-auto">Room title</th>
                            <th className="w-full md:w-auto">price</th>
                            <th className="w-full md:w-auto">Guest limit</th>
                            <th className="w-full md:w-auto">Beds</th>
                            <th className="w-full md:w-auto">Booking Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((list, index) => (
                                <tr key={list._id}>
                                    <td className="hidden md:table-cell">{index + 1}.</td>
                                    <td className="w-full md:w-auto">{list.title}</td>
                                    <td className="w-full md:w-auto">{list.price_per_night}</td>
                                    <td className="w-full md:w-auto">{list.max_guests}</td>
                                    <td className="w-full md:w-auto">{list.beds}</td>
                                    <td className="w-full md:w-auto text-center">{list.bookingFrom} <br /> to <br /> {list.bookingTo}</td>
                                    <td className="w-full md:w-auto">
                                        <td className="w-full md:w-auto">
                                            {/* <button onClick={() => handleUpdateNow(list._id)} className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
                                            Update Now
                                        </button> */}
                                            <div className="relative flex justify-center">
                                                <button onClick={() => setIsOpen(true)} className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
                                                    Review
                                                </button>

                                                {isOpens && (
                                                    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                                                <div>
                                                                    <div className="flex items-center justify-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                                                        </svg>
                                                                    </div>

                                                                    <div className="mt-2 text-center">
                                                                        <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Archive Project</h3>
                                                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea, ratione deleniti porro officia? Explicabo maiores suscipit.
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                                                                    <a href="#" className="text-sm text-blue-500 hover:underline">Learn more</a>

                                                                    <div className="sm:flex sm:items-center ">
                                                                        <button onClick={() => setIsOpens(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                                                            Cancel
                                                                        </button>

                                                                        <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                                                            Archive
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </td>
                                    <td className="w-full md:w-auto">
                                        <button className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
                                            Update Now
                                        </button>
                                    </td>
                                    <td className="w-full md:w-auto">
                                        <button onClick={() => handleCancelNow(list._id)} className="btn btn-outline border border-[#a86a60] hover:bg-[#a86a60] hover:outline-none hover:text-white text-[#a86a60]">
                                            Book Now
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyBooking;