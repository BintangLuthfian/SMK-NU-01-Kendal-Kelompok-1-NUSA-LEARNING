
const Credit = () => {
  return (
    <>
     <div className="bg-cover bg-center bg-no-repeat h-screen" 
    style={{ 
      backgroundImage: `url("./background pembayaran/bg pembayaran.jpg")` 
      }}>
      <div className="flex justify-center items-center">
        <div className="bg-white w-[332px] h-[462px] mt-10 rounded-lg shadow-2xl">
          <div className="bg-[#EC2028;] w-[332px] h-24">
            
            {/* <h1 className="text-black font-semibold ml-8 pt-5 text-xl">Nusa Lms</h1> */}
            <img src="./assets/iconnavbar.png" alt="" className="ml-8 pt-5 h-12" />
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
            
            <div className="flex ml-4 mt-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>

            <h1 className="p-1 text-xs font-bold text-[#EC2028;]">
              Kartu kredit / debit
            </h1>
            </div>


            <div className="flex ml-3 mt-3 items-center">
                <h1 className="text-sm text-[#EC2028;]">Nomor Kartu</h1>
                <div className="ml-auto mr-3 flex items-center">
                <img src="./assets/pembayaran/Bank.png" alt="" className="h-3" />
                <img src="./assets/pembayaran/dana.webp" alt="" className="h-3" />
                <img src="./assets/pembayaran/visa.png" alt="" className="h-3" />
                <img src="./assets/pembayaran/ovo.jpg" alt="" className="h-3" />
                </div>
            </div>

            <div className="flex  mt-5 items-center justify-center">
              <input type="number" className="w-4/5 p-[3px] focus:outline-none border rounded-md border-black" />
          </div>

          <div className="flex justify-between items-center ">
          <div className="text-sm ml-3">
            <h1 className="pt-2 ml-5 text-[#EC2028;]">Masa Berlaku</h1>
            <input type="date" className="w-4/5 ml-5 mt-1 p-[3px] focus:outline-none border rounded-md border-black" />
          </div>

          <div className="text-sm ml-3">
            <h1 className="pt-2 ml-2 text-[#EC2028;]">CVV</h1>
            <input type="password" className="w-3/4 ml-2 mt-1 p-[3px] focus:outline-none border rounded-md border-black" />
          </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
          <img src="./assets/pembayaran/Bank.png" alt="" className="h-3" />
                <img src="./assets/pembayaran/dana.webp" alt="" className="h-3" />
                <img src="./assets/pembayaran/visa.png" alt="" className="h-3" />
                <img src="./assets/pembayaran/ovo.jpg" alt="" className="h-3" />
          </div>
          <h1 className="pt-1 text-center text-xs">Secured Payment by midtrans</h1>

          <div className="mt-10 flex justify-center items-center">
            <div className="bg-[#EC2028;] w-[240px] py-1">
              <p className="font-bold text-sm text-center text-white">Bayar Sekarang</p>
            </div>
          </div>

          </div>
        </div>
      </div>
     
      </div>
      

  </>
  );
};

export default Credit;