import { Routes, Route } from 'react-router-dom';
import NavSideBar from "../../components/Admin/Sidebar";
import Dashboard from '../../components/Admin/Dashboard/Dashboard';
import PelatihanSaya from '../../components/Admin/PelatihanSaya/PelatihanSaya';

function AdminDashboard() {
  return (
    <>
      <div className="main-content bg-white">
        <Routes>
          <Route path="/Admin/*" element={<NavSideBar />} />
        </Routes>
        <Routes>
          <Route path='/Admin/Dashboard' element={<Dashboard />} />
          <Route path='/Admin/Pelatihan' element={<PelatihanSaya />} />
        </Routes>
      </div>
    </>
  );
}

export default AdminDashboard;
