import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateBook = () => {
    const { id } = useParams()
    console.log(id);
    const { user } = useContext(AuthContext)

    const [startDate, setStartDate] = useState(new Date());
    const [items, setItems] = useState([])

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_URL}/myBooking/${user?.email}`)
        setItems(data);
    }

    console.log(items);

    const roomDetails = items.find(item => item._id === id);
    console.log(roomDetails);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here, e.g., send data to server
        console.log('Form submitted!', startDate);
        // Reset form or perform any additional action
        const deadline = startDate
        const email = user?.email
        const BookData = {
            deadline,
            email,
        }

        try {
            const { data } = axios.put(
                `${import.meta.env.VITE_URL}/roomsdata/${id}`,
                BookData
            )
            console.log(data)
            // if (data.modifiedCount > 0) {
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'Booking Date Updated',
            //         showConfirmButton: false,
            //         timer: 1500,
            //     });
            // }

        } catch (err) {
            console.log(err)

        }
    }
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
                            onChange={date => setStartDate(date)}
                            defaultValue={new Date(roomDetails.bookingDate)} // Assuming bookingDate is in a format recognized by Date constructor
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