import {
  createBrowserRouter,

} from "react-router-dom";
import Main from '../layouts/Main'
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Rooms from "../Pages/Rooms";
import RoomPages from "../Pages/RoomPages";
import MyBook from "../Pages/MyBook";
import PrivateRoute from "../routes/PrivateRoute";
import Error from "../Pages/Error";
import UpdateBook from "../Pages/UpdateBook";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        element:
          <PrivateRoute><RoomPages></RoomPages></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/rooms/${params.id}`),
      },
      {
        path: "/myBookings",
        element: <PrivateRoute><MyBook></MyBook></PrivateRoute>,

      },
      {
        path: '/update/:id',
        element: <UpdateBook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/myBooking/${params.id}`),
      }
    ]
  },
]);



export default router;