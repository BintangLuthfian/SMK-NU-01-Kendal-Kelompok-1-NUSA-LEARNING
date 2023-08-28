import React, { useState } from 'react';
import Pelatihan from './Pelatihan';
import { BiChevronDown } from "react-icons/bi";
import Nomer from './Nomer';

const Start = () => {

     const [visibleItems, setVisibleItems] = useState(1);
    const itemsPerPage = 5; // Set the desired number of items per page

    // Sample data for the content items
    const items = Array.from({ length: 28 }, (_, index) => `Item ${index + 1}`);

    // Calculate total pages based on the number of items and items per page
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setVisibleItems(newPage);
    };


    return (
        <>
        <div className="pt-11 pl-[280px]">
            <h1 className="text-base font-bold text-[#EC2028] mt-10">Payment History</h1>
            <div className="flex items-center mt-1">
                <div className="bg-[#EC2028] text-white p-2 w-[125px] h-8">
                    <h1 className="text-center text-sm font-normal">Cari Kode Registrasi</h1>
                </div>
                <div className="bg-[#EC2028] text-white p-2 ml-4 w-[125px] h-8 flex items-center">
                    <h1 className="text-sm font-normal text-center flex-1">Sort By</h1>
                    <span>
                        <BiChevronDown className="text-2xl font-medium text-white"/>
                    </span>
                </div>
            </div>
        </div>
        <div className="py-3">

                        <Pelatihan
                            visibleItems={visibleItems}
                            itemsPerPage={itemsPerPage}
                            items={items}
                        />
                        <br />
                        <nav id="Pagination" className='absolute right-[220px] bottom-auto'>
                            <Nomer
                                currentPage={visibleItems}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </nav>

                    </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Start;
