import React from 'react';
import logo from '/logo.png';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
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
                    <a class="btn btn-accent">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;