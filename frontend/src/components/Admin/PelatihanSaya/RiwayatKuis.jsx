function RiwayatKuis() {


  return (
    <>
      <div className="h-screen bg-white">
        <div className="sm:ml-[254px] bg-white">
          <div className="p-6 mt-[53px] h-full">
            <a href="/Admin/Pelatihan">
              <h3 className="text-xl font-bold text-black">Pelatihan Saya</h3>
            </a>
            <div className="mt-[20px] text-black">
              <h3 className="text-sm font-bold text-black">Riwayat Kuis</h3>

              <p>Nilai yang ditampilkan adalah nilai yg tertinggi pada setiap test</p>
              <div className="border w-full h-full p-4 mt-[20px] relative">
                <h4>v  Kuis</h4>
                <div className="p-2">
                  <p>Batas nilai minimum yang harus dipenuhi (75)</p>
                </div>
                <div className="absolute bottom-[4px] right-[35px] grid">
                  <div className="flex justify-center items-center iten place-self-center rounded-full border w-[50px] h-[50px]">100</div>
                  <p className="">Nilai Test</p>
                </div>
              </div>
              <div className="border w-full h-full p-4 relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center rounded-full w-[30px] h-[30px] border mr-1">1</div>
                  <div>
                    <h5 className="text-base">16 Januari 2023 03.25</h5>
                    <p className="text-xs">Lihat Detail Kuis</p>
                  </div>
                </div>
                <div className="absolute bottom-[11px] right-[42px] grid">
                  <div className="flex justify-center items-center iten place-self-center rounded-full border w-[50px] h-[50px]">100</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default RiwayatKuis;
