import './tailwind.css';
import { useState } from 'react';
// import logoImage from "../assets/iconnavbar.png"
import logoImage from "../../assets/iconnavbar.png";
import bgImage from "../../assets/bg/bgpembayaran.jpg"
import Footer from "./Footer"


const Bank = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAtmBcaOpen, setIsAtmBcaOpen] = useState(false);
    const [isKlikBcaOpen, setIsKlikBcaOpen] = useState(false);
    const [isMBCAOpen, setIsMBCAOpen] = useState(false);
  
    const handleDropdownToggle = () => {
      setIsOpen(!isOpen);
      setIsAtmBcaOpen(false);
      setIsKlikBcaOpen(false);
      setIsMBCAOpen(false);
    };
  
    const handleAtmBcaToggle = () => {
      setIsAtmBcaOpen(!isAtmBcaOpen);
      setIsKlikBcaOpen(false);
      setIsMBCAOpen(false);
    };
  
    const handleKlikBcaToggle = () => {
      setIsKlikBcaOpen(!isKlikBcaOpen);
      setIsAtmBcaOpen(false);
      setIsMBCAOpen(false);
    };
  
    const handleMBCAToggle = () => {
      setIsMBCAOpen(!isMBCAOpen);
      setIsAtmBcaOpen(false);
      setIsKlikBcaOpen(false);
    };
  
    return (
<>
      <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex justify-center items-center">
        <div className="bg-white w-[332px] h-[462px] mt-10 rounded-lg shadow-2xl">
          <div className="bg-[#EC2028;] w-[332px] h-24">
            
            {/* <h1 className="text-black font-semibold ml-8 pt-5 text-xl">Nusa Lms</h1> */}
            <img src={logoImage} alt="" className="ml-8 pt-5 h-12" />
            <div className="flex justify-center items-center mt-[14px]">
              <div className="bg-white w-[250px] h-[73px] rounded-lg shadow-lg ">
                <div className="flex">
                  <h1 className="pt-1 pl-2 font-bold text-sm">Total</h1>
                  <h1 className="pt-1 pl-[70px] text-xs font-medium">Choose within</h1><span className="text-[#EC2028;] text-xs font-medium pt-1 pl-1">23:59:59</span>
                </div>
                <h1 className="pl-2 font-bold text-lg text-[#EC2028;]">Rp 100,000</h1>
                <h1 className="pb-3 pl-2 text-xs font-medium">Order ID #wWwTsA</h1>
              </div>
            </div>

          <h1 className="font-bold pl-3 text-sm pt-3 text-[#EC2028;]">Bank BCA</h1>
          <p className="pl-3 text-xs font-normal w-64">Complete Payment from BCA to the virtual account
            number below</p>
          <p className="mt-2 pl-3 text-xs font-medium">Virtual Account Number</p>
          <div className="flex justify-between">
            <p className="pl-3 text-xs">78987898789</p>
            <p className="pr-4 text-xs">Copy</p>
          </div>

          <div className="border-b border-[#EC2028;] pb-1"></div>
          <div className="flex justify-between">
            <h1 className="font-bold pl-3 text-xs pt-2 text-[#EC2028;]">How to Play</h1>
            <div className="pr-4">
              <button onClick={handleDropdownToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 pt-2 text-[#EC2028;] ${isOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
               </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <>
              <div className="h-full overflow-y-scroll overflow-custom">
                <div className="border-b border-[#EC2028;] pb-1"></div>
                <div className="flex justify-between">
                  <h1 className="font-bold pl-3 text-xs pt-2 text-[#EC2028;]">ATM BCA</h1>
                  <div className="pr-4">
                    <button onClick={handleAtmBcaToggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 pt-2 ${isAtmBcaOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
               </svg>
                    </button>
                  </div>
                </div>
                {isAtmBcaOpen && (
                  <div className="ml-4">
                    <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                    <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                    <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                    <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                    <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                    <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
                  </div>
                )}

                <div className="border-b border-[#EC2028;] pb-1"></div>
                <div className="flex justify-between">
                  <h1 className="font-bold pl-3 text-xs pt-2 text-[#EC2028;]">Klik BCA</h1>
                  <div className="pr-4">
                  <button onClick={handleKlikBcaToggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 pt-2 ${isKlikBcaOpen  ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
               </svg>
                    </button>
                  </div>
                </div>
                {isKlikBcaOpen  && (
                  <div className="ml-4">
                    <p className="text-xs font-medium w-64">1. Select</p>
                  </div>
                )}

                <div className="border-b border-[#EC2028;] pb-1"></div>
                <div className="flex justify-between">
                  <h1 className="font-bold pl-3 text-xs pt-2 text-[#EC2028;]">m-BCA</h1>
                  <div className="pr-4">
                  <button onClick={handleMBCAToggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 pt-2 ${isMBCAOpen  ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
               </svg>
                    </button>
                  </div>
                </div>
                {isMBCAOpen && (
                  <div className="ml-4">
                    <p className="text-xs font-medium w-64">1. m-BCA</p>
                  </div>
                )}

              </div>
            </>
          )}
          <div className="mt-2 flex justify-center items-center">
            <div className="bg-[#EC2028;] w-[240px] py-1">
              <p className="font-bold text-sm text-center text-white">Bayar Sekarang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
<br />
<Footer />
</>
  );
};

export default Bank;


