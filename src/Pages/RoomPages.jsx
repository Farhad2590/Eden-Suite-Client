import { useLoaderData } from "react-router-dom";


const RoomPages = () => {
    const rooms = useLoaderData()
    console.log(rooms);
    return (
        <div>
            
        </div>
    );
};

export default RoomPages;