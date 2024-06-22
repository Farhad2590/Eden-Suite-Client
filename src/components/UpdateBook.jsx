import { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast'
import { AuthContext } from '../provider/AuthProvider'



const UpdateBook = () => {
    const book = useLoaderData()
    const navigate = useNavigate()
    const {
        _id,
        deadline,
    } = book || {}
    console.log(book)
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date(deadline || new Date()))
    console.log(_id)
    const handleFormSubmit = async e => {
        e.preventDefault()
        const deadline = startDate
        const email = user?.email
        const BookData = {
            deadline,
            email,
        }

        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/book/${_id}`,
                BookData
            )
            console.log(data)
            // toast.success('Date Data Updated Successfully!')
            navigate('/my-bookings')
        } catch (err) {
            console.log(err)
            // toast.error(err.message)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Update a Book
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>

                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default UpdateBook