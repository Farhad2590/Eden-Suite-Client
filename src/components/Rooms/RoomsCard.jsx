import { AiTwotoneDollarCircle } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link } from "react-router-dom";





const RoomsCard = ({ rooms }) => {
    console.log(rooms);
    const { _id,banner_image, price_per_night, title,features_paragraph, room_description, max_guests, beds, room_size } = rooms
    return (
        <Link to={`/rooms/${_id}`} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={banner_image} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <AiTwotoneDollarCircle />
                <h1 className="mx-3 text-lg font-semibold text-white">Per-Night/{price_per_night}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">{features_paragraph}</p>


                <div className="">
                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <GoPeople className="text-2xl" />
                        <h1 className="px-2 text-xl"> | Max Guest:{max_guests}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <LuBedSingle className="text-2xl" />
                        <h1 className="px-2 text-xl"> | Beds: {beds}</h1>
                    </div>

                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <SlSizeFullscreen className="text-2xl" />
                        <h1 className="px-2 text-xl"> | Size :{room_size}</h1>
                    </div>
                </div>

                {/* <div >
                    <a
                        className="px-8 py-4"
                        style={{
                            borderColor: '#fad44a',
                            backgroundColor: '#fad44a',
                            color: '#050d24',
                            WebkitClipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
                            clipPath: 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
                            fontWeight: '800',
                            fontSize: '1.1rem'
                        }}
                    >
                        Book Now
                    </a>
                </div> */}
            </div>
        </Link>

    );
};

export default RoomsCard;