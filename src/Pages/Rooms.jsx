import { useLoaderData } from "react-router-dom";


const Rooms = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            Hello From Rooms
        </div>
    );
};

export default Rooms;