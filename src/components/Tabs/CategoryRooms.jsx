import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";


const CategoryRooms = ({ room }) => {
    const { _id,banner_image, title, max_guests, availability, room_size, features_paragraph } = room
    return (
        <div className="  rounded-2xl border  border-dashed p-2 flex lg:w-full ">
            <div className="lg:w-[50%]">
                <img src={banner_image} alt="" />
            </div>
            <div className="lg:w-[50%] space-y-6 pl-5">
                <h1 className="text-4xl pt-5">{title}</h1>
                <div className="flex items-center">
                    <IoMdPerson className="text-3xl" />
                    <div className="text-xl">
                        Max Guests : {max_guests}
                    </div>
                </div>
                <p className="text-xl">Room Stastus : {availability}</p>
                <p>{features_paragraph}</p>
                <div >
                    <Link
                        to={`/rooms/${_id}`}
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
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default CategoryRooms;