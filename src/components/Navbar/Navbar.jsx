
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => isActive ? "active-btn" : ""
                        } to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-btn" : ""
                        } to='/statistics'>Statistics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-btn" : ""
                        } to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-4  flex items-center">
                    <NavLink className={({ isActive }) => isActive ? "active-btn" : ""
                    } to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-btn" : ""
                    } to='/statistics'>Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-btn" : ""
                    } to='/dashboard'>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Link to="/cart"><FaCartArrowDown className="text-2xl" /></Link>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <Link to='/wishlist'><FaRegHeart className="text-2xl" /></Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;