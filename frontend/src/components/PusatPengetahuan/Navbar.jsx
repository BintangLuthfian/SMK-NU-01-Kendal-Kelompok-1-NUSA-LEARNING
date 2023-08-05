function Navbar() {
    return (
        <>
            <div className="navbar h-[64px]">
                <div className="navbar-start">
                    <div className="flex">
                        <h3 className="text-[14px] text-sm text-black font-bold ml-[49px]">Logo NusaLearning</h3>
                        <div className="ml-[106px]">
                            <input type="text" className="bg-white border-2 border-black text-blue500 text-sm block w-[542px] pl-[20px] p-[10px] ml-[106px]" placeholder="Cari Pelatihan..." />
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <h5 className="underline underline-offset-2 font-bold text-sm text-black mr-[34px]">Beranda</h5>
                    <h5 className="text-sm text-black mr-[58px]">Pelatihan</h5>
                    <h5 className="text-sm text-black mr-[31px]">ID v</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-black mr-[35px] h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <h5 className="text-sm text-black mr-[31px]">Login</h5>
                </div>
            </div>
        </>
    )
}

export default Navbar;