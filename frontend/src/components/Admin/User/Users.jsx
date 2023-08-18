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
      const response = await axios.get('http://localhost:5000/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${id}`);
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
      await axios.delete(`http://localhost:5000/user/${id}`);
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
    <>
      <div className="h-screen bg-white">
        <div className="sm:ml-[254px] bg-white relative">
          <div className="p-6 mt-[53px] h-full">
            <div className="justify-self-center">

              <AddUser />

              {selectedUser && (
                <EditUser
                  isOpen={modalOpen}
                  closeModal={closeModal}
                  user={selectedUser}
                />
              )}

              <table>
                <thead>
                  <tr >
                    <th className="border-2" >No</th>
                    <th className="border-2"
                      style={{
                        width: "200px"
                      }}
                    >Name</th>
                    <th className="border-2"
                      style={{
                        width: "300px"
                      }}
                    >Email</th>
                    <th className="border-2"
                      style={{
                        width: "100px"
                      }}
                    >Gender</th>
                    <th className="border-2"
                      style={{
                        width: "300px"
                      }}
                    >no_hp</th>
                    <th className="border-2"
                      style={{
                        width: "300px"
                      }}
                    >domisili</th>
                    <th className="border-2"
                      style={{
                        width: "200px"
                      }}
                    >birthdate</th>
                    <th className="border-2">Actions</th>
                  </tr>

                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td className="border-2">{index + 1}</td>
                      <td className="border-2">{user.name}</td>
                      <td className="border-2">{user.email}</td>
                      <td className="border-2">{user.gender}</td>
                      <td className="border-2">{user.no_hp}</td>
                      <td className="border-2">{user.domisili}</td>
                      <td className="border-2">{user.birthdate}</td>
                      <td className="border-2">
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
                          className="block text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2"
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
      </div >
    </>
  );
}

export default Users;