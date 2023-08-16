import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EditUser from './EditUser';
import AddUser from './AddUser';

function Users() {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      const userData = response.data;
      setSelectedUser(userData);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (id) => {
    setSelectedUserId(id);
    getUserById(id);
  };

  return (
    <div className="p-4 sm:ml-64 " id="Dashboard">
      <div className="p-4  rounded-lg dark:border-gray-700 mt-14">
        <div className="grid justify-items-stretch">
          <div className="justify-self-center">
            <button
              data-modal-target="ModalTambahDataUser"
              data-modal-toggle="ModalTambahDataUser"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2"
              type="button"
            >
              Tambah Data User
            </button>

            <AddUser />

            {selectedUser && (
              <EditUser
                isOpen={modalOpen}
                closeModal={closeModal}
                user={selectedUser}
              />
            )}

            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button
                        data-modal-target="ModalEditDataUsers"
                        data-modal-toggle="ModalEditDataUser"
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2"
                        type="button"
                        onClick={() => handleEditClick(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn bg-red-500 text-white"
                        value="Delete"
                        placeholder="Delete"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;