import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Nomer = () => {
  return (
    <>
    <div className="flex justify-end mr-[100px] mt-5">
      <div className="bg-[#EC2028] ml-[55px] mr-[1px] text-white p-2 w-14 h-7 rounded-md flex justify-center items-center">
        <BiChevronLeft className="text-2xl font-medium" />
      </div>

      <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
        <h1 className="text-center text-sm font-medium">1</h1>
      </div>

      <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
        <h1 className="text-center text-sm font-medium">2</h1>
      </div>

      <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
        <h1 className="text-center text-sm font-medium">3</h1>
      </div>

      <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
        <h1 className="text-center text-sm font-medium">4</h1>
      </div>

      <div className="border-[#EC2028] border ml-1 p-2 w-[50px] h-7 rounded-md flex justify-center items-center hover:bg-[#EC2028] transition duration-300 ease-in-out hover:text-white">
        <h1 className="text-center text-sm font-medium">20</h1>
      </div>

      <div className="bg-[#EC2028] ml-[5px] text-white p-2 w-14 h-7 rounded-md flex justify-center items-center">
        <BiChevronRight className="text-2xl font-medium" />
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default Nomer;
