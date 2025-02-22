import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
            <div className="flex items-center">
          <img src="/images/Indyte-png.png" alt="Indyte Logo" className="h-14 ml-14" /> {/* Increased logo size and moved right */}
          {/* <span className="text-pink-600 font-bold text-xl ml-2">indyte™</span>
          <span className="text-gray-600 ml-1">Nutrition and Lifestyle Clinic</span> */}
        </div>
                {/* <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">mld</h1></HashLink>
                    
                </div> */}
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img src="/src/images/indyte-png.png" alt="Indyte Logo" className="h-10" /> {/* Updated with the new logo path */}
//           <span className="text-indyte-pink font-bold text-xl ml-2">indyte™</span>
//           <span className="text-gray-600 ml-1">Nutrition and Lifestyle Clinic</span>
//         </div>
//         <ul className="flex space-x-6 text-indyte-purple font-medium">
//           <li><a href="#home" className="hover:text-indigo-800">Home</a></li>
//           <li><a href="#services" className="hover:text-indigo-800">Services</a></li>
//           <li><a href="#package" className="hover:text-indigo-800">Package</a></li>
//           <li><a href="#success-stories" className="hover:text-indigo-800">Success stories</a></li>
//           <li><a href="#blogs" className="hover:text-indigo-800">Blogs</a></li>
//           <li><a href="#about" className="hover:text-indigo-800">About Us</a></li>
//           <li><a href="#certificate" className="hover:text-indigo-800">Certificate</a></li>
//           <li><a href="#contact" className="hover:text-indigo-800">Contact us</a></li>
//         </ul>
//         <button className="bg-indyte-purple text-white px-4 py-2 rounded hover:bg-indigo-700">
//           Appointment
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;