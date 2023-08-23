import React from 'react'
import "./profil.css";


const Profil = () => {
  return (
    <div className="box color-blue" >
      <p>Daftar</p>
      <hr style={{
        color: "red"
      }} />
      <br />
      <table className="table">
         <tbody>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <td style={{
                                    width: "500px"
                                }}>
                            <img src="./Sampul/avatar.jpg" alt="" />
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <td>
                                <form action=""
                                style={{
                                    color: "white"
                                }}>
                                     <input id="input1" type="text" name="nama" placeholder="Nama" /><br />
                                        <hr className="color-black" />
                                        <input id="input2" type="email" name="email" value="" placeholder="Email" /><br/>
                                        <hr className="color-black" /><br/>
                                        <label>No HP</label><br/>
                                        <input id="input3" type="number" name="hp" value="62" placeholder=""/><br/>
                                        <hr className="color-black" />
                                        <p>Jenis Kelamin</p>
                                        <select name="select">
                                            <option value="Laki-Laki "> Laki-Laki </option>
                                            <option value="Laki-Laki "> Perempuan  </option>
                                        </select>
                                        <br />
                                        <p>Status</p>
                                        <select name="status">
                                            <optgroup label="Guru Mapel">
                                                <option value="Guru IPA">Guru IPA</option>
                                                <option value="Guru IPS">Guru IPS</option>
                                            </optgroup>
                                            <optgroup label="Siswa">
                                                <option value="Kelas X">Kelas X</option>
                                                <option value="Kelas XI">Kelas XI</option>
                                                <option value="Kelas XII">Kelas XII</option>
                                            </optgroup>
                                        </select>
                                        <br/>
                                        <p>Tanggal Lahir</p>
                                        <input type="date" name="tgllahir"/>
                                        <br/><br/>                                                                          
                                        
                                        <input id="input4" type="text" name="" value="" placeholder="Username"/><br/>
                                        <hr className="color-black" />
                                        <br/><br/>
                                        <input id="input5" type="password" name="" value="" placeholder="Password"/><br/>
                                        <hr className="color-black" />
                                </form>
                            </td>
                        </th>
                    </tr>
                </tbody>
            </table>
         </tbody>
      </table>
    </div>
  )
}

export default Profil
