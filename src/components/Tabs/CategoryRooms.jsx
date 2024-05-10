import { IoMdPerson } from "react-icons/io";


const CategoryRooms = ({ room }) => {
    const { banner_image, title, max_guests, availability, room_size, features_paragraph } = room
    return (
        <div className="bg-white   flex lg:w-full ">
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
                </div>


            </div>
        </div>
    );
};

export default CategoryRooms;