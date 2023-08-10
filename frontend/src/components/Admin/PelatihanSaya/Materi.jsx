function Materi() {


    return (
        <>
            <div className="h-screen bg-white">
                <div className="sm:ml-[254px] bg-white">
                    <div className="p-6 mt-[53px] h-full">
                        <a href="/Admin/Pelatihan">
                            <h3 className="text-xl font-bold text-black">Pelatihan Saya</h3>
                        </a>
                        <div className="mt-[20px] text-black">
                            <h3 className="text-sm font-bold text-black">judul pelatihan</h3>
                            <div className="border w-full h-full mt-[20px]">
                                <div className="flex justify-between bg-white border-b w-full p-4 h-[60px]">
                                    <a href="/Admin/Dashboard/Kuis">
                                        <div className="flex items-center justify-center w-[248px] h-[34px] bg-white border-2 border-black">
                                            Riwayat Kuis
                                        </div>
                                    </a>
                                    <div className="flex items-center justify-center w-[248px] h-[34px] bg-white border-2 border-black">
                                        Pencarian
                                    </div>
                                </div>
                                <div className="">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                            <tr className="grid grid-cols-3 text-black">
                                                <th className="flex items-center justify-center h-10">
                                                    No
                                                </th>
                                                <th className="flex items-center justify-center h-10">
                                                    Name
                                                </th>
                                                <th className="flex items-center justify-center h-10">
                                                    Email
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="grid grid-cols-3 text-black900">
                                                <td className="flex items-center justify-center h-10">
                                                    Modul 1
                                                </td>
                                                <td className="flex items-center justify-center h-10">
                                                    23-01-2023
                                                </td>
                                                <td className="flex items-center justify-center h-10">
                                                    <div className='flex items-center'>
                                                        <div className="w-[117px] bg-white border border-black rounded-full h-[11px] dark:bg-gray-700">
                                                            <div className="bg-black h-[10px] rounded-full" style={{ width: '100%' }}></div>
                                                        </div>
                                                        <h4 className='text-black text-sm ml-1'>100%</h4>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Materi;
