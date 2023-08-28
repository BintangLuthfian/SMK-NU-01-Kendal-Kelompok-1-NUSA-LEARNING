import React, { useState } from 'react';
import Pelatihan from './Pelatihan';
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
        <div className="footer pt-20 py-5 px-[62px] text-neutral-content border-black border-t-2">
                {/* <div className="text-white flex justify-end"> */}
                <div className="flex justify-start ml-[220px]">
                    <div className="bg-[#EC2028] ml-[52px] text-white p-2 w-16 h-8 rounded-md">
                        <h1 className="text-center text-sm font-medium">Start</h1>
                    </div>
                    <div className="bg-[#EC2028] text-white p-2 w-16 h-8 rounded-md">
                        <h1 className="text-center text-sm font-medium">Reset</h1>
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

    )
}

export default Start;




