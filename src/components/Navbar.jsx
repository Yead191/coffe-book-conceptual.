import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li className='text-lg'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg'><NavLink to='/coffees'>Coffees</NavLink></li>
        <li className='text-lg'><NavLink to='/dashboard'>Dashboard</NavLink></li>


    </>
    return (
        // h-16 jate fixed thakleo nijer position dore rakhte pare
        <div className="navbar backdrop-blur-2xl fixed top-0 z-50 md:px-28 lg:px-36 px-2 pt-4 pb-3 bg-white/30">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ">
                        {links}
                    </ul>
                </div>
                <Link to='/'  className="btn btn-ghost text-2xl">Coffee Book_</Link >
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end md:hidden">
                <a className="btn ">Login</a>
            </div>
        </div>
    );
};

export default Navbar;