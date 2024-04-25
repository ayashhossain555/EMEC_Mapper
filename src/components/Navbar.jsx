import { useContext } from "react";
import logo from '/logo.png';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AuthContext } from "../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const {user, logOut} =useContext(AuthContext);

    const handleSignOut=()=>{
        logOut()
        .then()
        .catch()
    }

    return (
        <div>
            <div class="navbar bg-base-100 my">
                <div class="navbar-start  relative">
                    <div class="dropdown">
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/"><li><a>Home</a></li></Link>
                            <li>
                                <a>Services</a>
                                    <ul class="p-2">
                                    <li><a>Disaster Management</a></li>
                                    <li><a>GIS Service</a></li>
                                    </ul>
                            </li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost text-3xl font-bold"><img src={logo} alt="" className='w-48 absolute left-1' /></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <li>
                    <details>
                        <summary>Services</summary>
                        <ul class="p-2">
                        <li><a>Disaster Management</a></li>
                        <li><a>GIS Service</a></li>
                        </ul>
                    </details>
                    </li>
                    <li><a>About Us</a></li>
                </ul>
                </div>
                <div class="navbar-end flex items-center gap-5">
                    <ThemeToggle></ThemeToggle>
                    {
                        user?
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle text-3xl btn-accent"><FaUserCircle /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/profile"><a className="">Profile</a></Link></li>
                                <li><a onClick={handleSignOut} className="text-accent font-bold">Sign Out</a></li>
                            </ul>
                        </div>
                        :
                        <Link to="/signin"><a className="btn text-lg font-semibold btn-accent">Sign In</a></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;