import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Indyte Logo and Company Info */}
        <div>
          <h1 className="text-4xl font-bold">indyte</h1>
          <p className="text-sm uppercase tracking-wide mt-1">Your Journey to a Healthier You</p>
          <p className="mt-4 font-semibold">Towards a Healthier, Fitter, And A Happier World</p>
          <p className="text-gray-400 text-sm mt-2">PRAVI INDYTE HEALTHCARE PVT LTD</p>
          <p className="mt-2 flex items-center gap-2">
            📍 Chandigarh, India
          </p>
          <p className="mt-1 flex items-center gap-2">
            ✉️ contact@indyte.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Package</a></li>
            <li><a href="#" className="hover:text-white">Success Stories</a></li>
            <li><a href="#" className="hover:text-white">Blogs</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Certificate</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Policy</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Cancellation & Refund</a></li>
          </ul>
        </div>

        {/* Location Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Dietitian-Nutritionists</a></li>
            <li><a href="#" className="hover:text-white">Dietitian in Chandigarh</a></li>
            <li><a href="#" className="hover:text-white">Nutritionist in Delhi</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-500"><FaFacebookF className="text-white" /></a>
        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400"><FaTwitter className="text-white" /></a>
        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-600"><FaYoutube className="text-white" /></a>
        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-500"><FaInstagram className="text-white" /></a>
        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-red-500"><FaPinterest className="text-white" /></a>
        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700"><FaLinkedin className="text-white" /></a>
      </div>
    </footer>
        </>
    )
}
export default Footer;
