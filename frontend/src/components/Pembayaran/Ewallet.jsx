import './tailwind.css';
import { useState } from 'react';
import barcodeImage from "../../assets/barcode/barcode.jpg"
import logoImage from "../../assets/iconnavbar.png"
import bgImage from "../../assets/bg/bgpembayaran.jpg"
import Footer from "./Footer"

const Ewallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEwallOpen, setIsEwallOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    setIsEwallOpen(false);
  };

  // const handleEwallToggle = () => {
  //   setIsEwallOpen(!isEwallOpen);
  // };
  return (
    <>
    {/* <div className="overflow-y-scroll overflow-custom"> */}
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex justify-center items-center">
          <div className="bg-white w-[332px] h-[462px] mt-10 rounded-lg shadow-2xl">
          <div className="bg-[#EC2028;] w-[332px] h-24">
            
          <div className="max-h-[462px] overflow-y-scroll border border-gray-300 scrollbar-thin">
            
        
          {/* <div className="overflow-y-scroll overflow-custom h-[calc(100% - 72px)]"> */}
          
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


            <h1 className=" pl-3 text-sm font-bold text-[#EC2028;]">
                Gopay
            </h1>
            <div className="flex justify-center items-center">
                <img className="w-[160px] h-[160px]" src={barcodeImage } alt="" />
            </div>

            <div className="border-b border-[#EC2028;] pb-1 mt-2"></div>
          <div className="flex justify-between">
            <h1 className="font-bold pl-3 text-xs pt-2 text-[#EC2028;]">How To Play</h1>
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
               <div className="ml-4 h-2">
               <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
               <p className="text-xs font-medium w-64">2. Select other transaction on the main menu</p>
               <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
               <p className="text-xs font-medium w-64">2. Select other transaction on the main menu</p>
               <p className="text-xs font-medium w-64">1. Select other transaction on the main menu</p>
               <p className="text-xs font-medium w-64">2. Select other transaction on the main menu</p>
             </div>
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
    </div>

      <br />
      <Footer />
  
    </>
  );
};

export default Ewallet;



