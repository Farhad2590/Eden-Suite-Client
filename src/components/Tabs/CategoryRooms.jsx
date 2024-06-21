import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoryRooms = ({ room }) => {
    const { _id, banner_image, title, max_guests, availability, room_size, features_paragraph } = room;
    return (
        <div className="rounded-2xl border border-dashed p-2 flex flex-col lg:flex-row lg:w-full">
            <div className="lg:w-1/2 lg:pr-4">
                <img src={banner_image} alt="" className="w-full" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between pl-0 lg:pl-4 pt-4 lg:pt-0">
                <div className="space-y-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">{title}</h1>
                    <div className="flex items-center">
                        <IoMdPerson className="text-2xl md:text-3xl lg:text-3xl" />
                        <div className="text-xl">Max Guests: {max_guests}</div>
                    </div>
                    <p className="text-xl">Room Status: {availability}</p>
                    <p>{features_paragraph}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Link
                        to={`/rooms/${_id}`}
                        className="px-8 py-4 block text-center"
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
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryRooms;
