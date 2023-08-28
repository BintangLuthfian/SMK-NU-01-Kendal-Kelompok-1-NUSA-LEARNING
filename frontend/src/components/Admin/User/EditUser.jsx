import React, { useState, useEffect } from 'react';
import axios from 'axios';


function EditUser({ isOpen, closeModal, user }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [no_hp, setNoHp] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [negara, setNegara] = useState('');
    const [domisili, setDomisili] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        if (isOpen && user) {
            setName(user.name);
            setEmail(user.email);
            setNoHp(user.no_hp);
            setNegara(user.negara);
            setBirthdate(user.birthdate);
            setDomisili(user.domisili);
            setGender(user.gender);
        }
    }, [isOpen, user]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNoHpChange = (e) => {
        setNoHp(e.target.value);
    };

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };

    const handleNegaraChange = (e) => {
        setNegara(e.target.value);
    };

    const handleDomisiliChange = (e) => {
        setDomisili(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedUser = {
                name,
                email,
                no_hp,
                birthdate,
                negara,
                domisili,
                gender,
            };

            const response = await axios.patch(
                `http://localhost:5000/user/${user.id}`,
                updatedUser
            );

            console.log('User updated:', response.data);

            closeModal();

            window.location.reload();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`} id="ModalEditDataUser">
        <div className="modal-box">
            <h2 >Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="field mb-2">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered input-success w-full max-w-mix"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="field mb-2">
                    <input
                        type="text"border
                        placeholder="Email"
                        className="input input-bordered input-success w-full max-w-mix"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="field mb-2">
                    <input
                        type="text"border
                        placeholder="Email"
                        className="input input-bordered input-success w-full max-w-mix"
                        value={no_hp}
                        onChange={handleNoHpChange}
                    />
                </div>
                <div className="field mb-2">
                    <input
                        type="text"border
                        placeholder="Email"
                        className="input input-bordered input-success w-full max-w-mix"
                        value={birthdate}
                        onChange={handleBirthdateChange}
                    />
                </div>
                <div className="field mb-2">
                    <input
                        type="text"border
                        placeholder="Email"
                        className="input input-bordered input-success w-full max-w-mix"
                        value={negara}
                        onChange={handleNegaraChange}
                    />
                </div>
                <div className="field mb-2">
                    <input
                        type="text"border
                        placeholder="Email"
                        className="input input-bordered input-success w-full max-w-mix"
                        value={domisili}
                        onChange={handleDomisiliChange}
                    />
                </div>
                <div className="field mb-2">
                    <label>Gender</label>
                    <div className="control">
                        <select
                            className="select select-bordered w-full max-w-mix"
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <a href="/admin/Users">
                        <button className="btn btn-primary mt-2" type="submit">
                            Update
                        </button>
                    </a>
                    <button className="btn btn-secondary mt-2" type="button" onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default EditUser;