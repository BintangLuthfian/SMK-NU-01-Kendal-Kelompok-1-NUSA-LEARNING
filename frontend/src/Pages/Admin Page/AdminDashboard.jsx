import { Routes, Route } from 'react-router-dom';
import NavSideBar from "../../components/Admin/Sidebar";
import Dashboard from '../../components/Admin/Dashboard/Dashboard';

import PelatihanSaya from '../../components/Admin/PelatihanSaya/PelatihanSaya';
import Materi from '../../components/Admin/PelatihanSaya/Materi';
import Detail from '../../components/Admin/PelatihanSaya/Detail';
import RiwayatKuis from '../../components/Admin/PelatihanSaya/RiwayatKuis';

import Sertifikat from '../../components/Admin/Sertifikat/Sertifikat';

import PaymentHistory from '../../components/Admin/PaymentHistory/PaymentHistory';

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
          <Route path='/Admin/Pelatihan/Materi' element={<Materi />} />
          <Route path='/Admin/Pelatihan/Detail' element={<Detail />} />
          <Route path='/Admin/Dashboard/Kuis' element={<RiwayatKuis />} />

          <Route path='/Admin/Sertifika' element={<Sertifikat />} />

          <Route path='/Admin/PaymentHistory' element={<PaymentHistory />} />

        </Routes>
      </div>
    </>
  );
}

export default AdminDashboard;
