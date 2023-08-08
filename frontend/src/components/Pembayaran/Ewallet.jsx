import './tailwind.css';
import { useState } from 'react';


const Ewallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEwallOpen, setIsEwallOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    setIsEwallOpen(false);
  };

  const handleEwallToggle = () => {
    setIsEwallOpen(!isEwallOpen);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-blue-600 w-[332px] h-[462px] mt-10 rounded-lg">
          <div className="bg-blue-500 w-[332px] h-24">
            <h1 className="text-black font-semibold ml-8 pt-5 text-xl">Nusa Lms</h1>
            <div className="flex justify-center items-center mt-[14px]">
              <div className="bg-orange-400 w-[250px] h-[73px] rounded-lg">
                <div className="flex">
                  <h1 className="pt-1 pl-2 font-bold text-sm">Total</h1>
                  <h1 className="pt-1 pl-[70px] text-xs font-medium">Choose within 23:59:59</h1>
                </div>
                <h1 className="pl-2 font-bold text-lg">Rp 100,000</h1>
                <h1 className="pb-1 pl-2 text-xs font-medium">Order ID #wWwTsA</h1>
              </div>
            </div>

            <h1 className=" pl-3 text-sm font-semibold">
                Gopay
            </h1>
            <div className="flex justify-center items-center">
                <img className="w-[150px] h-[150px]" src="./assets/barcode/barcode.jpg" alt="" />
            </div>

            <div className="border-b border-gray-300 pb-1"></div>
          <div className="flex justify-between">
            <h1 className="font-bold pl-3 text-xs pt-2">How to Play</h1>
            <div className="pr-4">
              <button onClick={handleDropdownToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 pt-2 ${isEwallOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
               </svg>
              </button>
            </div>
          </div>
          {isOpen && (
        <>
          <div className="h-full overflow-y-scroll overflow-custom">
            <div className="border-b border-gray-300 pb-1"></div>
            <div className="flex justify-between">
              <h1 className="font-bold pl-3 text-xs pt-2">ATM BCA</h1>
              <div className="pr-4">
                <button onClick={handleEwallToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 pt-2 ${isEwallOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
               </svg>
                </button>
              </div>
            </div>
            {isEwallOpen && (
              <div className="ml-4">
                <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                <p className="text-xs font-medium w-64">2. Select other transaction on the main menu</p>
                <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                <p className="text-xs font-medium w-64">2. Select other transaction on the main menu</p>
                <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                <p className="text-xs font-medium w-64">2. Select other transaction on the main menu</p>
              </div>
            )}
          </div>
        </>
      )}
          <div className="flex justify-center items-center">
            <div className="bg-slate-500 w-[240px] py-1">
              <p className="font-bold text-sm text-center">Back to Merchant</p>
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Ewallet;


