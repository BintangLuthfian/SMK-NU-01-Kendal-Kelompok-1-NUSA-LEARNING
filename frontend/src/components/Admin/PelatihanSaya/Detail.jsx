function Detail() {
    return (
        <>
            <div className="mt-[23px] text-black">
                <h3 className="text-xl font-bold text-black">Riwayat Kuis</h3>
                <div className="flex justify-between">
                    <div className="h-max-full">
                        <div className="border w-[930px] h-fit p-3 my-[17px]">
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
        </>
    );
}

export default Detail;
