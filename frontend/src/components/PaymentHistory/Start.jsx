import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Start = () => {
    return (
        <>
        <div className="pt-11 pl-[280px]">
            <h1 className="text-base font-bold text-[#EC2028] mt-10">Payment History</h1>
            <div className="flex items-center mt-1">
                <div className="bg-[#EC2028] text-white p-2 w-[125px] h-8">
                    <h1 className="text-center text-sm font-normal">Cari Kode Registrasi</h1>
                </div>
                <div className="bg-[#EC2028] text-white p-2 ml-4 w-[125px] h-8 flex items-center">
                    <h1 className="text-sm font-normal text-center flex-1">Sort By</h1>
                    <span>
                        <BiChevronDown className="text-2xl font-medium text-white"/>
                    </span>
                </div>
            </div>
        </div>
        <br />
        </>
    );
}

export default Start;
