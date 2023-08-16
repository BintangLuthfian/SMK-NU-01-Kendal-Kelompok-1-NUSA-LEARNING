import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import NavSideBar from "../../components/Admin/Sidebar";
import Dashboard from '../../components/Admin/Dashboard/Dashboard';

import PelatihanSaya from '../../components/Admin/PelatihanSaya/PelatihanSaya';
import Materi from '../../components/Admin/PelatihanSaya/Materi';
import Detail from '../../components/Admin/PelatihanSaya/Detail';
import RiwayatKuis from '../../components/Admin/PelatihanSaya/RiwayatKuis';

import Sertifikat from '../../components/Admin/Sertifikat/Sertifikat';

import PaymentHistory from '../../components/Admin/PaymentHistory/PaymentHistory';


import Users from '../../components/Admin/User/Add';


function AdminDashboard() {
  return (

      <BrowserRouter>
       <div className="main-content bg-white">
        <Routes>
          <Route path="/admin" element={<NavSideBar />} />
          <Route path='/admin/Dashboard' element={<Dashboard />} />
          <Route path='/admin/Pelatihan' element={<PelatihanSaya />} />
          <Route path='/admin/Pelatihan/Materi' element={<Materi />} />
          <Route path='/admin/Pelatihan/Detail' element={<Detail />} />
          <Route path='/admin/Dashboard/Kuis' element={<RiwayatKuis />} />
          <Route path='/admin/Sertifikat' element={<Sertifikat />} />
          <Route path='/admin/PaymentHistory' element={<PaymentHistory />} />
          <Route path='/admin/Users' element={<Users />} />
        </Routes>
        </div>
       </BrowserRouter>
  );
}

export default AdminDashboard;
