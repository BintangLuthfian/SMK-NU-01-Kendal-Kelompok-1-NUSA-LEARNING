function Content({ visibleItems }) {

    const itemsPerPage = 5;
    const items = Array.from({ length: 28 }, (_, index) => `${index + 1}`);
    const startIndex = (visibleItems - 1) * itemsPerPage;
    const visibleItemsData = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            {visibleItemsData.map((item, index) => (
                <div key={index} id={`Content-${startIndex + index}`} className='flex border-2 border-black w-[1127px] h-[253px] relative my-6 p-[21px]'>
                    <div className="flex items-center justify-center border w-[209px] h-[209px]">{item}</div>
                    <div className="ml-[21px] text-black flex ">
                        <div className="grid mr-[158px]">
                            <h3 className='text-xl font-bold self-start'>Judul Pelatihan</h3>
                            <div className='self-center'>
                                <h3 className="text-lg text-font font-bold">Kode Registrasi</h3>
                                <p>Psj12RtaL3</p>
                            </div>
                            <div className="self-end">
                                <h3 className="text-lg text-font font-bold">Harga</h3>
                                <p>Rp 100,000</p>
                            </div>
                        </div>
                        <div className="grid mr-[158px]">
                            <div className="self-start">
                                <p className="invisible">1</p>
                            </div>
                            <div className="self-center">
                                <h3 className="text-lg text-font font-bold">Kategori</h3>
                                <p>Kategori A</p>
                            </div>
                            <div className="self-end">
                                <h3 className="text-lg text-font font-bold">Total Bayar</h3>
                                <p>Rp 100,000</p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="self-start">
                                <p className="invisible">1</p>
                            </div>
                            <div className="self-center">
                                <h3 className="text-lg text-font font-bold">Status Pembayaran</h3>
                                <p>Waiting</p>
                            </div>
                            <div className="self-end">
                                <p className="invisible">1</p>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer text-black flex items-center justify-center border absolute bottom-[21px] right-[21px] w-[248px] h-[34px]">
                        Lanjutkan Pembayaran
                    </div>
                </div>
            ))}

        </>
    )
}

export default Content;