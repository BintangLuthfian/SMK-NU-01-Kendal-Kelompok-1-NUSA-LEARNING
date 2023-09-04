import React from "react";
import { DatePicker, Space } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footersemua";
import Sidebar from "../components/layout/Sidebarakun";
import Navbar from "../components/layout/Navbarakun";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const Akun = () => {
  return (
    <>
    <Navbar />
    <div> 
    <Sidebar />
    </div>
      <div className=""
      style={{
        marginLeft: "300px"
      }}
      >
        <h1 className="font-extrabold text-2xl mb-3">Akun</h1>
        <p>
          Harap masukan informasi yang valid agar proses pembelajaran lebih
          mudah
        </p>
      </div>
      <div className="border border-black center mt-8  h-auto"
      style={{
        marginLeft: "300px"
      }}
      >
        <div className="ml-8 mt-5">
          <div className="flex justify-between items-center">
            <a className="text-xl font-extrabold mb-5">Foto Profile</a>
            <Link to="/password">
              <button className="rounded border border-black text-lg px-3 py-1 mr-10">
                Ganti Sandi
              </button>
            </Link>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <img
                className="rounded-lg w-52 h-52 mb-3"
                src="./Sampul/html.png"
              />
              <input type="file" />
            </div>

            <form className="w-[100%] mr-10">
              <div className="flex-col">
                <div className="flex-col flex mb-3">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Nama Lengkap..."
                    className="border w-full rounded border-gray-500 text-gray-400 hover:border-blue-600"
                   
                  />
                </div>
                <div className="flex-col flex mt-5">
                  <label>Alamat Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border w-full rounded border-gray-500 text-gray-400 hover:border-blue-600"
                  
                  />
                </div>
                <div className="flex-col flex mt-5 ">
                  <label>Nomor Telepon</label>
                  <input
                    type="text"
                    placeholder="08..."
                    className="border w-full rounded border-gray-500 text-gray-400 hover:border-blue-600"
                 
                  />
                </div>
                <div className="flex-col flex mt-5">
                  <label>Tanggal Lahir</label>
                  <Space direction="vertical">
                    <DatePicker
                      onChange={onChange}
                      className="w-full h-11 border border-gray-500 text-gray-400 hover:border-blue-600"
                    />
                  </Space>
                </div>
                <div className="flex-col flex mt-5">
                  <label>Negara</label>
                  <input
                    type="text"
                    placeholder="Asal Negara"
                    className="border w-full rounded border-gray-500 text-gray-400 hover:border-blue-600"
                    value="Indonesia"
                  />
                </div>
                <div className="flex-col flex mt-5">
                  <label> Domisili </label>
                  <input
                    type="text"
                    placeholder="Domisili (Kota)"
                    className="border w-full rounded border-gray-500 text-gray-400 hover:border-blue-600"
                    
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-end ">
            <button className="border rounded border-gray-500 mb-5 mt-5 text-lg px-3 py-1 mr-10">
              Perbarui Profile
            </button>
          </div>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
};

export default Akun;
