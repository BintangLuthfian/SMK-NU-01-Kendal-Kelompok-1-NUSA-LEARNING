import React, { useState } from 'react';

function TotalSemuaPelatihan({ showDiv1, visibleItems, onPaginationChange }) {
  const items = [
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },
    {
      title: 'Pelatihan Saya 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer...',
      accessedDate: '19 November 2022',
      progress: '75%',
    },

  ];

  const startIndex = (visibleItems - 1) * 3;
  const endIndex = Math.min(startIndex + 3, items.length);

  const totalPages = Math.ceil(items.length / 3);

  const handlePageChange = (pageNumber) => {
    onPaginationChange(pageNumber);
  };

  const renderPagination = () => {
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
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button
                onClick={() => handlePageChange(Math.max(visibleItems - 1, 1))}
                disabled={visibleItems === 1}
                className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </button>
            </li>
            {renderPagination()}
            <li>
              <button
                onClick={() => handlePageChange(Math.min(visibleItems + 1, totalPages))}
                disabled={visibleItems === totalPages}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TotalSemuaPelatihan;


// function TotalSemuaPelatihan({ showDiv1 }) {
//     return (
//         <>
//             <div className="bg-white w-full h-full ml-3">
//                 <div className={`flex 2xl:flex-wrap flex-wrap ${showDiv1 ? 'block' : 'hidden'}`}>
//                     <div className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>

//                         {/* Content */}
//                         <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//                         <div className="inline-block p-[23px]">
//                             <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//                             <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//                             <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                                 Selesai   : -</p>
//                             <div className='flex items-center'>
//                                 <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                                     <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                                 </div>
//                                 <h4 className='text-black text-sm ml-1'>75%</h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>
//                         <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//                         <div className="inline-block p-[23px]">
//                             <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//                             <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//                             <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                                 Selesai   : -</p>
//                             <div className='flex items-center'>
//                                 <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                                     <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                                 </div>
//                                 <h4 className='text-black text-sm ml-1'>75%</h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>
//                         <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//                         <div className="inline-block p-[23px]">
//                             <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//                             <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//                             <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                                 Selesai   : -</p>
//                             <div className='flex items-center'>
//                                 <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                                     <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                                 </div>
//                                 <h4 className='text-black text-sm ml-1'>75%</h4>
//                             </div>
//                         </div>
//                     </div>

//                     {/* the content hidden every 3 content eppear */}
//                     <div className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>
//                         <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//                         <div className="inline-block p-[23px]">
//                             <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//                             <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//                             <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                                 Selesai   : -</p>
//                             <div className='flex items-center'>
//                                 <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                                     <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                                 </div>
//                                 <h4 className='text-black text-sm ml-1'>75%</h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>
//                         <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//                         <div className="inline-block p-[23px]">
//                             <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//                             <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//                             <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                                 Selesai   : -</p>
//                             <div className='flex items-center'>
//                                 <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                                     <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                                 </div>
//                                 <h4 className='text-black text-sm ml-1'>75%</h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex xl:bg-success lg:bg-green500 md:bg-blue500 xl:w-[1299px] lg:w-[723px] h-[237px] my-[10px] mx-3'>
//                         <div className="bg-yellow400 text-black flex items-center justify-center xl:w-[237px] lg:w-[249px] h-[237px]">Sampul Pelatihan</div>
//                         <div className="inline-block p-[23px]">
//                             <h3 className='text-base font-bold text-black'>Pelatihan Saya</h3>
//                             <p className='text-black line-clamp-3 mt-[11px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget alala habi...</p>
//                             <p className='text-xs text-black mt-[21px]'>Diakses  : 19 November 2022 <br />
//                                 Selesai   : -</p>
//                             <div className='flex items-center'>
//                                 <div className="xl:w-[733px] lg:w-[468px] lg:w-[633px] bg-white border border-black rounded-full h-[17px] dark:bg-gray-700">
//                                     <div className="bg-black h-[16px] rounded-full" style={{ width: '75%' }}></div>
//                                 </div>
//                                 <h4 className='text-black text-sm ml-1'>75%</h4>
//                             </div>
//                         </div>
//                     </div>
//                     {/* the content hidden every 3 content eppear */}
//                     {/* Content */}

//                 </div>
//                 <nav aria-label="Page navigation example">
//                     <ul class="flex items-center -space-x-px h-10 text-base">
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                                 <span class="sr-only">Previous</span>
//                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//                                 </svg>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-r-2 border-gray300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
//                         </li>
//                         <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                             ...
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">20</a>
//                         </li>
//                         <li>
//                             <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                                 <span class="sr-only">Next</span>
//                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//                                 </svg>
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default TotalSemuaPelatihan;