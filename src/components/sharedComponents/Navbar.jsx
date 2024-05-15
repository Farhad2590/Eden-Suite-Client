import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { Link, NavLink } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";



const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const nav =
        user ? (<div className='lg:flex lg:gap-2'>

            <div className="flex gap-1">
                <button className="text-2xl"><MdOutlineMapsHomeWork /></button>
                <NavLink to='/' className={({ isActive }) => isActive ? ' text-[#aae0aa]  text-xl font-bold' : 'font-bold text-xl '}>Home</NavLink>
            </div>
            <div className="flex gap-1">
                <button className="text-2xl"><IoBedOutline /></button>
                <NavLink to='/rooms' className={({ isActive }) => isActive ? '  text-[#aae0aa] text-xl font-bold' : 'font-bold text-xl'}>Rooms</NavLink>
            </div>
            <div className="flex gap-1">
                <button className="text-2xl"><CgCalendarDates /></button>
                <NavLink to='/myBookings' className={({ isActive }) => isActive ? ' text-[#aae0aa] text-xl font-bold' : 'font-bold text-xl'}>My Bookings</NavLink>
            </div>

        </div>) :
            <div className='lg:flex lg:gap-2'>


                <div className="lg:flex gap-5">
                    <div className="flex gap-1">
                        <button className="text-2xl"><MdOutlineMapsHomeWork /></button>
                        <NavLink to='/' className={({ isActive }) => isActive ? ' text-[#aae0aa]  text-xl font-bold' : 'font-bold text-xl '}>Home</NavLink>
                    </div>
                    <div className="flex gap-1">
                        <NavLink to='/login' className={({ isActive }) => isActive ? ' text-[#aae0aa]  text-xl font-bold' : 'font-bold text-xl '}>SignIn</NavLink>
                    </div>
                    <div className="flex gap-1">
                        <NavLink to='/registration' className={({ isActive }) => isActive ? ' text-[#aae0aa]  text-xl font-bold' : 'font-bold text-xl '}>Registration</NavLink>
                    </div>
                    
                </div>

            </div>
    return (
        <div>
            <div className="navbar mb-5">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow w-52  rounded-badge bg-[#f6faf9]">
                            {nav}
                        </ul>
                    </div>
                    <a className="text-xl w-20 bg-green"><img src='' alt="" />EdenSuite</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {nav}
                </div>

                <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} title={user.displayName} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>

                            <ul tabIndex={0} title={user.displayName} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>
                                </li>
                            </ul>
                        </div>
                            :
                            null
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;