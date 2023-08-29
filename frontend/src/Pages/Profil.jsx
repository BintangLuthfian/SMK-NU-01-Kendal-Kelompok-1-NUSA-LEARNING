import React from 'react'
import "./profil.css";
import { BiBorderRadius } from 'react-icons/bi';

const Profil = () => {
  return (
    <div className="box color-blue">
      <h3
      style={{
        fontSize: "30px"
      }}
      >Akun</h3>
      <p>Harap masukan informasi yang falid agar pembelajaran lebih mudah</p>
      <br />

      <div className='flex-container'>
        <div className="profile-image-container">
          <img src="./Sampul/avatar.jpg" alt="" style={{ width: "400px", height: "300px", marginLeft: "10px", marginTop: "10px", borderRadius: "50px" }} />
          <p>Upload Foto</p>
        </div>
        <form action="" 
          style={{
            color: "red",
           marginLeft: "50px",
           marginTop: "10px",
           marginBottom: "50px"
          }}>
            <p>nama Lengkap</p>
            <input type="text" name="tgllahir" />
          <hr className="color-black" />
          <p>Alamat Email</p>
          <input type="text" name="tgllahir" />
          <hr className="color-black" />
          <label>No HP</label>
          <input type="text" name="tgllahir" />
          <hr className="color-black" />
          <p>Tanggal Lahir</p>
          <input type="text" name="tgllahir" />

          <p>Negara</p>
          <input className="input1" type="text" name="nama" />
          <p>Domisili</p>
          <input type="text" name="tgllahir" />
        </form>
     </div>
             <p style={{
                border: "3px solid black",
                BorderRadius: "50%",
                marginLeft: "950px",
                marginRight: "100px",
                width: "150px",
                marginTop: "10px",
                textAlign: "center"
            }}>Perbaruhi Profil</p>
        
      

     
    </div>
  )
}

export default Profil


