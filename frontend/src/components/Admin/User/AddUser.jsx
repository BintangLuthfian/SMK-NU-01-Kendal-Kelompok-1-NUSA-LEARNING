import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no_hp, setNoHp] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [negara, setNegara] = useState("");
    const [domisili, setDomisili] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUsers = async (e) => {
        try {
          await axios.post('http://localhost:5000/user',
            { name, email, no_hp, birthdate, negara, domisili, gender });
          navigate("/");
        }
        catch (error) {
          console.log(error);
        }
      };

    return (
        <>
       
       <div>
                <div class="relative w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Tambah Data User
                            </h3>
                            
                        </div>
                        <div className="p-6 space-y-6">
                            <form onSubmit={saveUsers}>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-mix" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-mix" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="No Hp" className="input input-bordered input-success w-full max-w-mix" value={no_hp} onChange={(e) => setNoHp(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Tanggal Lahir" className="input input-bordered input-success w-full max-w-mix" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Negara" className="input input-bordered input-success w-full max-w-mix" value={negara} onChange={(e) => setNegara(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Domisili" className="input input-bordered input-success w-full max-w-mix" value={domisili} onChange={(e) => setDomisili(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <label>Gender</label>
                                    <div className='control'>
                                        <select className='select select-bordered w-full max-w-mix' value={gender} onChange={(e) => setGender(e.target.value)} >
                                            <option value="Male" className=''>Male</option>
                                            <option value="Female" className=''>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <a to="/admin/Users">
                                        <button className='btn btn-primary mt-2' type='submit'>
                                            Save
                                        </button>
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
     </>
    )
}

export default AddUser