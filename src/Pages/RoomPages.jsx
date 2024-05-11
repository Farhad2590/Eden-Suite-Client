import { useLoaderData } from "react-router-dom";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link } from "react-router-dom";

const RoomPages = () => {
    const rooms = useLoaderData()
    console.log(rooms);
    const { _id, banner_image, price_per_night, room_images, title, features_paragraph, room_description, max_guests, beds, room_size } = rooms
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="relative">
                    <img className="object-cover w-full h-64" src={banner_image} alt="Article" />
                    <div id="one" className="absolute top-0 left-0 flex items-center bg-white">
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
                </div>
                <div className="py-2 dark:bg-gray-100">
                    <h1 href="#" className="text-center block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Our {room_description} images</h1>
                    <div className="container flex flex-col justify-center p-4 mx-auto" bis_skin_checked="1">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            {room_images.map((roomImage, index) => (
                                <img key={index} className="object-cover w-full dark:bg-gray-500 aspect-square" src={roomImage} alt={`Room ${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RoomPages;