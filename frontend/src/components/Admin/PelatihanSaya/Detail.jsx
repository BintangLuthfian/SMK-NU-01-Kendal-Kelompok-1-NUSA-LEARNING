function Detail() {
    return (
        <>
            <div className="h-screen bg-white">
                <div className="sm:ml-[254px] bg-white">
                    <div className="p-6 mt-[53px] h-full">
                        <a href="/Admin/Pelatihan">
                            <h3 className="text-xl font-bold text-black">Pelatihan Saya</h3>
                        </a>
                        <div className="mt-[20px] text-black">
                            <h3 className="text-sm font-bold text-black">Detail Jawaban Kuis </h3>
                            <div className="flex justify-between">
                                <div className="h-max-full my-[20px]">
                                    <div className="border w-[930px] h-fit p-3">
                                        <h4>Judul pertanyaan</h4>

                                        <p className="mt-[23px]" >Pertanyaan A</p>

                                        <p className="mt-[23px]">Jawaban terpilih: a</p>
                                        <p>Jawaban benar: a</p>

                                        <p className="mt-[23px]">Perolehan: 50.00</p>
                                        <p>Bobot Soal: 50.00</p>
                                    </div>
                                </div>
                                <div className="border w-fit h-fit mt-[17px] p-4">
                                    <div className="w-full border-b">Detail Kuis</div>
                                    <div className="">
                                        <p className="mt-[14px]">Pelatihan: Lorem Ipsum</p>
                                        <p className="">Tanggal: 10 Januari 2023</p>
                                        <p className="">Total Nilai: 50/100</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
