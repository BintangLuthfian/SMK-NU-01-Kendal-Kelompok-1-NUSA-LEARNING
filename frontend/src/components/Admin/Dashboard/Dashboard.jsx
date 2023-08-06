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
                    <div className="flex md:place-content-center sm:flex-wrap md:flex-wrap xl:justify-between bg-white px-6 h-full">
                        <div className="justify-start w-[559px] h-[424px] bg-white border-2 mt-[20px] border-black">

                        </div>
                        <div className="justify-end w-[552px] h-[424px] bg-white border-2 mt-[20px] border-black">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
