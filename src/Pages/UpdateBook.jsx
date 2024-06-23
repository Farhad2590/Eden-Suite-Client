import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateBook = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const roomDetails = items.find(item => item._id === id);
    const { _id, deadline } = roomDetails || {};

    useEffect(() => {
        if (user) {
            getData();
        }
    }, [user]);

    const getData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/myBooking/${user?.email}`);
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (deadline) {
            setStartDate(new Date(deadline));
        }
    }, [deadline]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const BookData = {
            deadline: startDate,
            email: user?.email,
        };

        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_URL}/roomsdata/${id}`,
                BookData
            );
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Date Updated',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (err) {
            console.error('Error updating booking date:', err);
        }
    };
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
            {roomDetails && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Room Description: {roomDetails.room_description}</p>
                        <p>Room Size: {roomDetails.room_size}</p>
                        <p>Per Night: {roomDetails.price_per_night}</p>
                        {/* Other room details */}
                        <DatePicker
                            className='border p-2 w-full rounded-md mt-4'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <button type="submit" className="bg-blue-700 text-white btn mt-4">
                        Update Booking Date
                    </button>
                </form>
            )}
        </div>
    );
};

export default UpdateBook;