function Content({ visibleItems }) {

    const itemsPerPage = 3;
    const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);
    const startIndex = (visibleItems - 1) * itemsPerPage;
    const visibleItemsData = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            {visibleItemsData.map((item, index) => (
                <div key={index} id={`Content-${startIndex + index}`} className='flex items-center border-2 border-black w-[1127px] h-[158px] relative my-6'>
                    <div className='flex bg-yellow400 border-r-2 border-t-2 border-b-2 border-black justify-center items-center w-[209px] h-[158px]'>{item}</div>
                    <div className='p-4 text-black'>
                        <h3 className='text-lg font-bold mb-3' >Judul Pelatihan</h3>
                        <div className='text-sm flex border-2 border-black justify-center items-center rounded-full w-[122px] h-[25px] mb-3' >
                            Kategori A
                        </div>
                        <p className='text-sm mb-3' >ID Sertifikat: Psj12RtaL3</p>
                    </div>
                    <div className='flex absolute border-2 border-black justify-center items-center text-black right-[65px] inset-y-[62px] w-[248px] h-[34px]' >
                        Unduh Sertifikat
                    </div>
                </div>
            ))}

        </>
    )
}

export default Content;