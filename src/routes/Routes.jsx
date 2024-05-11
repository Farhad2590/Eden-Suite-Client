import {
  createBrowserRouter,

} from "react-router-dom";
import Main from '../layouts/Main'
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Rooms from "../Pages/Rooms";
import RoomPages from "../Pages/RoomPages";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: '/rooms/:id',
        element: (
          <RoomPages></RoomPages>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/rooms/${params.id}`),
      },
    ]
  },
]);



export default router;