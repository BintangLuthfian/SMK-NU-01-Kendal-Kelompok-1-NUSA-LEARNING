import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUsers = async (e) => {
        try {
          await axios.post('http://localhost:5000/users',
            { name, email, gender });
          navigate("/");
        }
        catch (error) {
          console.log(error);
        }
      };

    return (
        <>
            <div id="ModalTambahDataUser" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Tambah Data User
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="ModalTambahDataUser">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                            <form onSubmit={saveUsers}>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-mix" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='field mb-2'>
                                    <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-mix" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <a href="/users">
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