
const Credit = () => {
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
                <h1 className="pb-3 pl-2 text-xs font-medium">Order ID #wWwTsA</h1>
              </div>
            </div>
            
            <div className="flex ml-4 mt-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>

            <h1 className="p-1 text-xs font-bold ">
              Kartu kredit / debit
            </h1>
            </div>


            <div className="flex ml-3 mt-5 items-center">
                <h1 className="text-sm">Nomor Kartu</h1>
                <div className="ml-auto mr-3 flex items-center">
                <img src="./assets/pembayaran/Bank.png" alt="" className="h-4" />
                <img src="./assets/pembayaran/dana.webp" alt="" className="h-4" />
                <img src="./assets/pembayaran/visa.png" alt="" className="h-4" />
                <img src="./assets/pembayaran/ovo.jpg" alt="" className="h-4" />
                </div>
            </div>

            <div className="flex  mt-5 items-center justify-center">
              <input type="number" className="w-full" />
          </div>
          
          </div>
        </div>
      </div>

    </>
  );
};

export default Credit;


