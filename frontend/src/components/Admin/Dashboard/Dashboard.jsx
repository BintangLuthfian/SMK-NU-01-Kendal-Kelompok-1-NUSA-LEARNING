import Tc from "./grafikAdmin";
import Dnt from "./grafiklingkaran";

function Dashboard() {
    return (
        <>
            <div className="h-screen bg-white">
                <div className="sm:ml-[254px] bg-white">
                    <div className="p-6 mt-[53px] h-full ">
                        <h3 className="text-xl font-bold text-black">Dashboard</h3>
                        <div className="w-full mt-[20px] bg-white border-2 border-black">
                            <h3 className="inline-block text-sm text-black font-bold mt-[8px] ml-[27px]">Pelatihan Saya</h3>
                            <div className="flex md:place-content-center md:flex-wrap sm:flex-wrap 2xl:justify-between bg-white mt-[11px] mx-[27px]">
                                <div className="flex flex-col items-center justify-center bg-white border-2 border-black w-[318px] h-[147px] mb-[27px] md:mx-[17px] sm:mx-[34px]">
                                    <h3 className="text-4xl text-black">5</h3>
                                    <p className="text-black">Total Semua Pelatihan</p>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white border-2 border-black w-[318px] h-[147px] mb-[27px] md:mx-[17px] sm:mx-[34px]">
                                    <h3 className="text-4xl text-black">1</h3>
                                    <p className="text-black">Pelatihan Sedang Berjalan</p>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white border-2 border-black w-[318px] h-[147px] mb-[27px] md:mx-[17px] sm:mx-[34px]">
                                    <h3 className="text-4xl text-black">4</h3>
                                    <p className="text-black">Pelatihan Selesai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
      <div className="grid grid-cols-2">
        <div
          className=" border border-black mr-2 relative"
          style={{ height: "470px" }}
        >
          <div className=" mt-2 ml-2 font-bold">
            {" "}
            Grafik Jumlah Pelatihan Selesai Saya
          </div>
          <button
            className="border border-black mt-2 mx-3 text-sm absolute top-0 right-0 hover hover:bg-gray-400 hover:text-gray-900"
            style={{ height: "25px", width: "120px" }}
          >
            Unduh gambar
          </button>
          <br />
          <div>
            <Tc />
          </div>
        </div>

        <div
          className=" border border-black ml-2 relative"
          style={{ height: "470px" }}
        >
          <div className=" mt-2 ml-2 font-bold"> Total Pelatihan</div>
          <button
            className="border border-black mt-2 mx-3 text-sm absolute top-0 right-0 hover hover:bg-gray-400 hover:text-gray-900"
            style={{ height: "25px", width: "120px" }}
          >
            Unduh gambar
          </button>
          <br />
          <div>
            <Dnt />
          </div>
        </div>
      </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard;
