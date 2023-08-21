import React, { useState } from 'react';
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import Navbar from './Navbar';

function SideBar() {
    const [isDropdown1Open, setIsDropdown1Open] = useState(false);

    const toggleDropdown1 = () => {
        setIsDropdown1Open((prev) => !prev);
    };

    return (
        <>
            <Navbar />
           
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-[460px] pt-[64px] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div dir="ltr" className="h-full pb-4 overflow-y-auto bg-[#EC2028]">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <span className="font-bold text-white ml-6 whitespace-nowrap uppercase">Filter</span>
                            <button
                                type="button"
                                className={`flex items-center p-2 text-white rounded-none  ${isDropdown1Open ? 'active' : ''}`}
                                aria-controls="dropdown-example-1"
                                onClick={toggleDropdown1}
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg> */}
                                <span className="flex-1 ml-7 text-left whitespace-nowrap font-normal">Kategori</span>
                                <BiChevronDown className={`text-2xl font-medium  ${isDropdown1Open ? '' : 'hidden'}`}/>
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown1Open ? 'hidden' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg> */}
                                <BiChevronRight className={` text-2xl font-medium ${isDropdown1Open ? 'hidden' : ''}`} />
                            </button>
                            <ul id="dropdown-example-1" className={`space-y-2 ${isDropdown1Open ? '' : 'hidden'}`}>
                                <li>
                                    <a href="#" className="flex items-center p-2 font-normal text-white transition duration-75 rounded-none pl-10  hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Kategori 1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 font-normal text-white transition duration-75 rounded-none pl-10  hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Kategori 2</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 font-normal text-white transition duration-75 rounded-none pl-10  hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Kategori 3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 font-normal text-white transition duration-75 rounded-none pl-10  hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Kategori 4</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 font-normal text-white transition duration-75 rounded-none pl-10  hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Kategori 5</a>
                                </li>
                            </ul>
                        </li>
                       
                    </ul>
                </div>
            </aside>

        </>
    )
}

export default SideBar;


// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from "../../components/PusatPengetahuan/Footer";

// function SideBar() {
//     const [isDropdown1Open, setIsDropdown1Open] = useState(false);

//     const toggleDropdown1 = () => {
//         setIsDropdown1Open((prev) => !prev);
//     };

//     return (
//         <div className="flex">
//             <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-full pt-[64px] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//             <div dir="ltr" className="h-full pb-4 overflow-y-auto bg-[#EC2028]">
//                     <ul className="space-y-2 font-medium">
//                         <li>
//                             <button
//                                 type="button"
//                                 className={`flex items-center p-2 text-white rounded-none  ${isDropdown1Open ? 'active' : ''}`}
//                                 aria-controls="dropdown-example-1"
//                                 onClick={toggleDropdown1}
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
//                                 </svg>

//                                 <span className="flex-1 ml-3 text-left whitespace-nowrap">Dashboard</span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth="1.5"
//                                     stroke="currentColor"
//                                     className={`w-4 h-4 font-bold ${isDropdown1Open ? '' : 'hidden'}`}
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
//                                 </svg>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth="1.5"
//                                     stroke="currentColor"
//                                     className={`w-4 h-4 font-bold ${isDropdown1Open ? 'hidden' : ''}`}
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//                                 </svg>
//                             </button>
//                             <ul id="dropdown-example-1" className={`space-y-2 ${isDropdown1Open ? '' : 'hidden'}`}>
//                                 <li>
//                                     <a href="/Admin/Dashboard" className="flex items-center p-2 text-white transition duration-75 ">
//                                         Dashboard</a>
//                                 </li>
//                                 <li>
//                                     <a href="/Admin/Pelatihan" className="flex items-center p-2 text-white transition duration-75 ">
//                                         Pelatihan Saya</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center p-2 text-white transition duration-75 rounded-none pl-10  hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
//                                         Sertifikat</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="flex items-center p-2 text-white transition duration-75 ">
//                                         Payment History</a>
//                                 </li>
//                             </ul>
//                         </li>
                       
//                     </ul>
//                 </div>
//             </aside>
//             <main className="flex-1"> {/* Main content */}
//                 <div className="py-4 px-8"> {/* Main content container */}
//                     {/* Main content */}
//                 </div>
//                 <Footer />
//             </main>
//         </div>
//     );
// }

// export default SideBar;
