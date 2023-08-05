import { Routes, Route } from 'react-router-dom';
import NavSideBar from "../components/AdminDashboard/Sidebar";
import Dashboard from '../components/AdminDashboard/Dashboard';

function AdminDashboard() {
  return (
    <>
      <div className="main-content bg-white">
        <Routes>
          <Route path="/Admin/*" element={<NavSideBar />} />
        </Routes>
        <Routes>
          <Route path='/Admin/Dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default AdminDashboard;
