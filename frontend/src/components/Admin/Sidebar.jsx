import React, { useState } from 'react';
import Navbar from './Navbar';

function NavSideBar() {
    const [isDropdown1Open, setIsDropdown1Open] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);
    const [isDropdown3Open, setIsDropdown3Open] = useState(false);

    const toggleDropdown1 = () => {
        setIsDropdown1Open((prev) => !prev);
    };

    const toggleDropdown2 = () => {
        setIsDropdown2Open((prev) => !prev);
    };

    const toggleDropdown3 = () => {
        setIsDropdown3Open((prev) => !prev);
    };

    return (
        <>
            <Navbar />
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-full pt-[66px] transition-transform -translate-x-full border-r-2 border-black border-black sm:translate-x-0" aria-label="Sidebar">
                <div dir="ltr" className="h-full pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <button
                                type="button"
                                className={`flex items-center p-2 text-black rounded-none bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 w-full group ${isDropdown1Open ? 'active' : ''}`}
                                aria-controls="dropdown-example-1"
                                onClick={toggleDropdown1}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg>

                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Dashboard</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown1Open ? '' : 'hidden'}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown1Open ? 'hidden' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <ul id="dropdown-example-1" className={`space-y-2 ${isDropdown1Open ? '' : 'hidden'}`}>
                                <li>
                                    <a href="/Admin/Dashboard" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Dashboard</a>
                                </li>
                                <li>
                                    <a href="/Admin/Pelatihan" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Pelatihan Saya</a>
                                </li>
                                <li>
                                    <a href="/Admin/Sertifikat" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Sertifikat</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Payment History</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`flex items-center p-2 text-black rounded-none bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 w-full group ${isDropdown2Open ? 'active' : ''}`}
                                aria-controls="dropdown-example-2"
                                onClick={toggleDropdown2}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>


                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Manajemen Pelatihan</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown2Open ? '' : 'hidden'}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown2Open ? 'hidden' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <ul id="dropdown-example-2" className={`space-y-2 ${isDropdown2Open ? '' : 'hidden'}`}>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Pelatihan</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Modul</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Sub Modul</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Kuis</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Pertanyaan</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`flex items-center p-2 text-black rounded-none bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 w-full group ${isDropdown2Open ? 'active' : ''}`}
                                aria-controls="dropdown-example-2"
                                onClick={toggleDropdown3}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>


                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Katalog</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown3Open ? '' : 'hidden'}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-4 h-4 font-bold ${isDropdown3Open ? 'hidden' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <ul id="dropdown-example-2" className={`space-y-2 ${isDropdown3Open ? '' : 'hidden'}`}>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-black transition duration-75 rounded-none pl-10 bg-white hover:bg-gray500 hover:border-s-2 hover:border-b-2 hover:border-t-2 w-full group">
                                        Laporan Pelatihan</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default NavSideBar;