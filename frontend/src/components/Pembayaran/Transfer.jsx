import { Link } from "react-router-dom";
const Transfer = () => {
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

            <h1 className="pt-3 pl-3 pb-2 text-sm font-normal border-b border-gray-300">
              Pilih Metode Pembayaran
            </h1>
            {/* Tambahkan kelas "border-b border-gray-300" untuk menambahkan garis bawah */}
            <div className="flex justify-between pt-1">
                <h1 className="font-bold pl-3 text-sm">Credit/Debit Card</h1>
                {/* Teks di sebelah kiri (pojok kiri) */}
                <Link to="/credit-card">
                {/* <h1 className="font-bold pl-3 text-sm">klik</h1> */}
                <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
                </div>
                

                </Link>
            </div>
            <div className="flex row-auto pl-3 border-b border-gray-300 pb-3 text-xs">
              <div className="bg-red-400 w-10 h-10 p-1">
                <h1>Visa</h1>
              </div>
              <div className="bg-red-400 w-10 h-10 p-1 ml-3">
                <h1>Visa</h1>
              </div>
            </div>

            <div className="flex justify-between pt-1">
                <h1 className="font-bold pl-3 text-sm">Bank Transfer</h1>
                {/* Teks di sebelah kiri (pojok kiri) */}
                <Link to="/bank">
                {/* <h1 className="font-bold pl-3 text-sm">klik</h1> */}
                <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
                </div>
                </Link>
            </div>

            <div className="flex row-auto pl-3 border-b border-gray-300 pb-3 text-xs">
              <div className="bg-red-400 w-10 h-10 p-1 text-xs">
                <h1>BCA</h1>
              </div>
              <div className="bg-red-400 w-10 h-10 p-1 ml-3 text-xs">
                <h1>BRI</h1>
              </div>
              <div className="bg-red-400 w-10 h-10 p-1 ml-3 text-xs">
                <h1 className="text-xs text-center">MANDIRI</h1>
              </div>
            </div>

            <div className="flex justify-between pt-1">
                <h1 className="font-bold pl-3 text-sm">E-wallets</h1>
                {/* Teks di sebelah kiri (pojok kiri) */}
                <Link to="/E-wallet">
                {/* <h1 className="font-bold pl-3 text-sm">klik</h1> */}
                <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6 text-red-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
                </div>
                </Link>
                {/* Teks di sebelah kanan (pojok kanan) */}
            </div>
            <div className="flex row-auto pl-3 border-b border-gray-300 pb-3 text-xs">
              <div className="bg-red-400 w-10 h-10 p-1">
                <h1>Gopay</h1>
              </div>
              <div className="bg-red-400 w-10 h-10 p-1 ml-3">
                <h1>OVO</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;


