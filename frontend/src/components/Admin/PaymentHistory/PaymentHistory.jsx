import React, { useState } from 'react';
import Content from './Content';
import Pagination from './Pagination';

function PaymentHistory() {

    const [visibleItems, setVisibleItems] = useState(1);
    const itemsPerPage = 5; // Set the desired number of items per page

    // Sample data for the content items
    const items = Array.from({ length: 28 }, (_, index) => `Item ${index + 1}`);

    // Calculate total pages based on the number of items and items per page
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setVisibleItems(newPage);
    };

    const [dropdownKategori, setDropdownKategori] = useState(false);

    const toggleDropdownKategori = () => {
        setDropdownKategori((prev) => !prev);
    };

    return (
        <div className="h-screen bg-white">
            <div className="sm:ml-[254px] bg-white relative">
                <div className="p-6 mt-[53px] h-full">
                    <h3 className="text-xl font-bold text-black">Payment History</h3>
                    <div className="flex mt-[20px]">
                        <div className="cursor-pointer flex justify-center items-center border w-[236px] h-[42px] mr-3">
                            Cari Kode Registrasi
                        </div>
                        <div className='select-none'>
                            <div
                                aria-controls="dropdownKategori"
                                className={`cursor-pointer relative flex justify-center items-center border w-[236px] h-[42px] mr-3 group ${dropdownKategori ? 'active' : ''
                                    }`}
                                onClick={toggleDropdownKategori}
                            >
                                <label className="">
                                    Sort By
                                </label>
                                <div className='absolute right-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className={`w-4 h-4 font-bold ${dropdownKategori ? '' : 'hidden'
                                            }`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className={`w-4 h-4 font-bold ${dropdownKategori ? 'hidden' : ''
                                            }`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                            <ul
                                id="dropdownKategori"
                                className={`absolute mt-3 z-[1] py-3 shadow bg-white dropdown-content rounded border border-gray-300 text-black w-[236px] ${dropdownKategori ? '' : 'hidden'
                                    }`}
                            >
                                <li className="font-bold w-full h-fit mb-[10px] ml-[19px]">
                                    Sort By
                                </li>
                                <li className="cursor-pointer w-full h-fit hover:bg-gray-300">
                                    <a className="block py-2 px-4">Recent </a>
                                </li>
                                <li className="cursor-pointer w-full h-fit hover:bg-gray-300">
                                    <a className="block py-2 px-4">Oldest</a>
                                </li>
                                <li className="cursor-pointer w-full h-fit hover:bg-gray-300">
                                    <a className="block py-2 px-4">Judul Pelatihan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-3">

                        <Content
                            visibleItems={visibleItems}
                            itemsPerPage={itemsPerPage}
                            items={items}
                        />

                        <nav id="Pagination" className='absolute right-[220px] bottom-2'>
                            <Pagination
                                currentPage={visibleItems}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentHistory;
