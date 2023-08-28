// import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

// const Nomer = () => {
//   return (
//     <>
//     <div className="flex justify-end mr-[100px] mt-5">
//       <div className="bg-[#EC2028] ml-[55px] mr-[1px] text-white p-2 w-14 h-7 rounded-md flex justify-center items-center">
//         <BiChevronLeft className="text-2xl font-medium" />
//       </div>

//       <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
//         <h1 className="text-center text-sm font-medium">1</h1>
//       </div>

//       <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
//         <h1 className="text-center text-sm font-medium">2</h1>
//       </div>

//       <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
//         <h1 className="text-center text-sm font-medium">3</h1>
//       </div>

//       <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
//         <h1 className="text-center text-sm font-medium">4</h1>
//       </div>

//       <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
//         <h1 className="text-center text-sm font-medium">20</h1>
//       </div>

//       <div className="bg-[#EC2028] ml-[5px] text-white p-2 w-14 h-7 rounded-md flex justify-center items-center">
//         <BiChevronRight className="text-2xl font-medium" />
//       </div>
//     </div>
//     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//     </>
//   );
// }

// export default Nomer;




import React from 'react';

function Nomer ({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showEllipsis = totalPages > 5;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pageNumbers.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <li key={index}>
        {pageNumber === '...' ? (
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400">
            {pageNumber}
          </span>
        ) : (
          <button
            onClick={() => handlePageChange(pageNumber)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-white bg-[#EC2028] border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
             dark:hover:text-white ${currentPage === pageNumber ? 'bg-gray-300 font-bold' : ''}`}
          >
            {pageNumber}
          </button>
        )}
      </li>
    ));
  };

  return (

    <ul className="flex items-center -space-x-px h-10 text-base">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <span className="sr-only">Previous</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <span className="sr-only">Next</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>

  );
}

export default Nomer;