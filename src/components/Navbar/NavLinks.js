import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-indigo-500 hover:text-purple-900" smooth to="/#about">
               Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-indigo-500 hover:text-blue-900" smooth to="/#services">
               Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-indigo-500 hover:text-blue-900" to="/">
                Package
            </HashLink>
            <HashLink className="px-4 font-extrabold text-indigo-500 hover:text-blue-900" to="/contact#contact">
                Success stories
            </HashLink>
            <HashLink className="px-4 font-extrabold text-purple-500 hover:text-blue-900" to="/contact#contact">
                Blogs
            </HashLink>
            <HashLink className="px-4 font-extrabold text-purple-500 hover:text-blue-900" to="/contact#contact">
                About Us
            </HashLink>
            <HashLink className="px-4 font-extrabold text-purple-500 hover:text-blue-900" to="/contact#contact">
                Certificate
            </HashLink>
            <HashLink className="px-4 font-extrabold text-purple-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <button className="text-white bg-indigo-400 hover:bg-indigo-500 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" >
                Appointment
            </button>
            {/* <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded-md transition-colors">
            Appointment
          </button> */}
        </>
    )
}

export default NavLinks;
