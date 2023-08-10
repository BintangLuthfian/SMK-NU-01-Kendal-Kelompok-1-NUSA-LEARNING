import React from 'react';
import Pagination from './Pagination';

function TotalSemuaPelatihan({ showDiv1, visibleItems, onPaginationChange }) {
  // Dummy data for demonstration purposes (you should use real data in your actual implementation)
  const itemsPerPage = 3;
  const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (visibleItems - 1) * itemsPerPage;
  const visibleItemsData = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className={`bg-white w-full h-full ml-3 ${showDiv1 ? 'block' : 'hidden'}`}>
        <div className="flex 2xl:flex-wrap flex-wrap">

          {visibleItemsData.map((item, index) => (
            <div key={index} id={`Content-${startIndex + index}`} className="flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3 relative">
              <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
              <div className='py-4 ml-4'>
                <h3 className='text-base font-bold text-black'>{item}</h3>
                <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
                <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
                  Selesai   : -</p>
                <div className='flex items-center'>
                  <div className="xl:w-[983px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
                    <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <h4 className='text-black text-sm ml-1'>75%</h4>
                </div>
                <div className='flex mt-4 justify-center'>
                  <a href="/Admin/Pelatihan/Materi">
                    <div className='btn mr-2 rounded-none'>Lihat Materi</div>
                  </a>
                  <a href="/Admin/Pelatihan/Detail">
                    <div className='btn ml-2 rounded-none'>Detail</div>
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center absolute bottom-0 right-0 border-l border-t text-black w-[109px] h-[29px]">Uncompleted</div>
            </div>
          ))}

        </div>

        <nav>
          <Pagination currentPage={visibleItems} totalPages={totalPages} onPageChange={onPaginationChange} />
        </nav>
      </div>
    </>
  );
}

export default TotalSemuaPelatihan;


// function TotalSemuaPelatihan({ showDiv1 }) {
//   return (
//     <>
//       <div className={`bg-white w-full h-full ml-3 ${showDiv1 ? 'block' : 'hidden'}`}>
//         <div className="flex 2xl:flex-wrap flex-wrap">

//           <div id="Content" className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>
//             <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//             <div className="inline-block p-[23px]">
//               <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//               <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//               <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                 Selesai   : -</p>
//               <div className='flex items-center'>
//                 <div className="xl:w-[983px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                   <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                 </div>
//                 <h4 className='text-black text-sm ml-1'>75%</h4>
//               </div>
//             </div>
//           </div>

//         </div>

//         <nav id="Pagination ">
//           <ul class="flex items-center -space-x-px h-10 text-base">
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span class="sr-only">Previous</span>
//                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-r-2 border-gray300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
//             </li>
//             <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//               ...
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">20</a>
//             </li>
//             <li>
//               <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span class="sr-only">Next</span>
//                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//                 </svg>
//               </a>
//             </li>
//           </ul>
//         </nav>

//       </div>
//     </>
//   )
// }

// export default TotalSemuaPelatihan;


import React from 'react';

function TotalSemuaPelatihan({ showDiv1, visibleItems, onPaginationChange, items }) {
  const ITEMS_PER_PAGE = 3;

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    onPaginationChange(pageNumber);
  };

  const renderPagination = () => {
    if (totalPages === 0) {
      // If there are no items, don't render pagination
      return null;
    }

    const MAX_PAGES = 5;
    const currentPage = visibleItems;

    let pagesToShow;
    if (totalPages <= MAX_PAGES) {
      pagesToShow = totalPages;
    } else {
      pagesToShow = MAX_PAGES;
    }

    let startPage = 1;
    let endPage = pagesToShow;

    if (currentPage > 2 && currentPage + 2 <= totalPages) {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    } else if (currentPage + 2 > totalPages) {
      startPage = totalPages - (MAX_PAGES - 1);
      endPage = totalPages;
    }

    const paginationButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${visibleItems === i ? 'bg-gray-200' : ''}`}
          >
            {i}
          </button>
        </li>
      );
    }

    if (totalPages > MAX_PAGES) {
      if (endPage < totalPages) {
        paginationButtons.push(
          <li key="ellipsis" className="flex items-center justify-center px-4 h-10">
            ...
          </li>
        );

        paginationButtons.push(
          <li key={totalPages}>
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${visibleItems === totalPages ? 'bg-gray-200' : ''}`}
            >
              {totalPages}
            </button>
          </li>
        );
      }

      if (startPage > 1) {
        paginationButtons.unshift(
          <li key={1}>
            <button
              onClick={() => handlePageChange(1)}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${visibleItems === 1 ? 'bg-gray-200' : ''}`}
            >
              1
            </button>
          </li>
        );

        paginationButtons.unshift(
          <li key="ellipsis-start" className="flex items-center justify-center px-4 h-10">
            ...
          </li>
        );
      }
    }

    return paginationButtons;
  };


  const startIndex = (visibleItems - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, items.length);

  return (
    <>
      <div className="bg-white w-full h-full ml-3">
        <div className={`flex 2xl:flex-wrap flex-wrap ${showDiv1 ? 'block' : 'hidden'}`}>
          {items.slice(startIndex, endIndex).map((item, index) => (
            <div key={index} className="flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3">
              <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">
                Sampul Pelatihan
              </div>
              <div className="inline-block p-[23px]">
                <h3 className="text-base font-bold text-black">{item.title}</h3>
                <p className="text-black line-clamp-3 mt-[11px]">{item.description}</p>
                <p className="text-xs text-black mt-[21px]">Diakses: {item.accessedDate}<br />Selesai: -</p>
                <div className="flex items-center">
                  <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
                    <div className="bg-black h-[16px] rounded-full" style={{ width: item.progress }}></div>
                  </div>
                  <h4 className="text-black text-sm ml-1">{item.progress}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {renderPagination()}
      </div>
    </>
  );
}

export default TotalSemuaPelatihan;

// import React, { useRef, useState } from 'react';

// function Nomer2() {

//     return (
//         <>
//             <div
//                 className="w-full h-[430px] bg-white border border-black "
//             >
//                 <h3 className="inline-block font-bold text-lg text-black ml-[46px] mt-[18px]">Kategori Pelatihan</h3>
//                 <p className="flex justify-start text-black ml-[46px] mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis. </p>
//                 <div className='ml-[29px] mt-[10px] flex flex-wrap'>
//                     <div className="px-[17px] py-[17px]">
//                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                 Logo Kategori
//                             </div>
//                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                         </div>
//                     </div>
//                     <div className="px-[17px] py-[17px]">
//                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                 Logo Kategori
//                             </div>
//                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                         </div>
//                     </div>
//                     <div className="px-[17px] py-[17px]">
//                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                 Logo Kategori
//                             </div>
//                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                         </div>
//                     </div>
//                     <div className="px-[17px] py-[17px]">
//                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                 Logo Kategori
//                             </div>
//                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                         </div>
//                     </div>
//                     <div className="px-[17px] py-[17px]">
//                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                 Logo Kategori
//                             </div>
//                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                         </div>
//                     </div>
//                     <div className="px-[17px] py-[17px]">
//                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                 Logo Kategori
//                             </div>
//                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );

// }

// export default Nomer2

// // import React from 'react';

// // function Nomer2() {
// //   return (
// //     <>
// //       <div className="w-full h-[430px] bg-white border border-black">
// //         <h3 className="inline-block font-bold text-lg text-black ml-[46px] mt-[18px]">Kategori Pelatihan</h3>
// //         <p className="flex justify-start text-black ml-[46px] mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis.</p>
// //         <div className="ml-[29px] mt-[10px] flex flex-wrap" style={{ width: '100%', height: '330px', overflowY: 'auto' }}>
// //         <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>

// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Nomer2;


// // import React from 'react';

// // function Nomer2() {
// //   return (
// //     <>
// //       <div className="w-full bg-white border border-black p-4">
// //         <h3 className="font-bold text-lg text-black">Kategori Pelatihan</h3>
// //         <p className="text-black mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis.</p>
// //         <div className="flex flex-wrap mt-4">
// //         <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>
// //                     <div className="px-[17px] py-[17px]">
// //                         <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
// //                             <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
// //                                 Logo Kategori
// //                             </div>
// //                             <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
// //                             <p className='text-black mt-[8px]'>Deskripsi kategori</p>
// //                         </div>
// //                     </div>

// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Nomer2;
