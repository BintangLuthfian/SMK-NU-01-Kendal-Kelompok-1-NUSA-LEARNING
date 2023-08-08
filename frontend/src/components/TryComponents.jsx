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
