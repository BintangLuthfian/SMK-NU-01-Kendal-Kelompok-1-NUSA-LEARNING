import React, { useState } from 'react';

function Pelatihan({ showDiv1, setShowDiv1 }) {
    // const [showDiv1, setShowDiv1] = useState(true);
    // // const [showDiv2, setShowDiv2] = useState(false);
    // // const [showDiv3, setShowDiv3] = useState(false);

    const handleButtonClick = (divId) => {
        setShowDiv1(divId === 1);
      };

    return (
        <>
            <div className="flex mt-[23px] text-black">
                <button
                    onClick={() => handleButtonClick(1)}
                    className={`bg-[#D9D9D9] border-2 border-black mr-[24px] w-[248px] h-[42px] ${showDiv1 ? 'bg-[#D9D9D9]' : 'bg-white'
                        }`}
                >
                    id 1
                </button>
                {/* <button
                    onClick={() => handleButtonClick(2)}
                    className={`bg-[#D9D9D9] border-2 border-black mr-[24px] w-[248px] h-[42px] ${showDiv2 ? 'bg-[#D9D9D9]' : 'bg-white'
                        }`}
                >
                    id 2
                </button>
                <button
                    onClick={() => handleButtonClick(3)}
                    className={`bg-[#D9D9D9] border-2 border-black mr-[24px] w-[248px] h-[42px] ${showDiv3 ? 'bg-[#D9D9D9]' : 'bg-white'
                        }`}
                >
                    id 3
                </button> */}
            </div>
        </>
    )
}

export default Pelatihan;

// import React, { useState } from 'react';

// function Pelatihan({ showDiv1 }) {
//     const [showDiv1, setShowDiv1] = useState(true);
//     const [showDiv2, setShowDiv2] = useState(false);
//     const [showDiv3, setShowDiv3] = useState(false);
  
//     const handleButtonClick = (divId) => {
//       setShowDiv1(divId === 1);
//       setShowDiv2(divId === 2);
//       setShowDiv3(divId === 3);
//     };

//     return (
//         <>
//             <div className="flex mt-[23px] text-black">
//                 <button
//                     onClick={() => handleButtonClick(1)}
//                     className={`bg-[#D9D9D9] border-2 border-black mr-[24px] w-[248px] h-[42px] ${showDiv1 ? 'bg-[#D9D9D9]' : 'bg-white'
//                         }`}
//                 >
//                     id 1
//                 </button>
//                 <button
//                     onClick={() => handleButtonClick(2)}
//                     className={`bg-[#D9D9D9] border-2 border-black mr-[24px] w-[248px] h-[42px] ${showDiv2 ? 'bg-[#D9D9D9]' : 'bg-white'
//                         }`}
//                 >
//                     id 2
//                 </button>
//                 <button
//                     onClick={() => handleButtonClick(3)}
//                     className={`bg-[#D9D9D9] border-2 border-black mr-[24px] w-[248px] h-[42px] ${showDiv3 ? 'bg-[#D9D9D9]' : 'bg-white'
//                         }`}
//                 >
//                     id 3
//                 </button>
//             </div>
//         </>
//     )
// }

// export default Pelatihan;