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
                  <div className='btn mr-2 rounded-none'>Lihat Materi</div>
                  <div className='btn ml-2 rounded-none'>Detail</div>
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
