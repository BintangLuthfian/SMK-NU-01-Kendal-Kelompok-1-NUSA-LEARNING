// //  Percobaan

// import './App.css';
// // import Home from "./Pages/Home";
// import AdminDashboard from './Pages/Admin Page/AdminDashboard';
// // import KategoriPelatihan from './Pages/KategoriPelatihan';
// // import Login from './Pages/Login';
// // import Register from './Pages/Register';
// // import Pengetahuan from './Pages/Pengetahuan';
// // import Ban from "./pages/Bank";
// // import Data from "./pages/Data";
// // import Ewall from "./pages/Ewall";
// // import Cred from "./pages/Cred";

// function App() {
//   return (
//     <div>
//       {/* <Home /> */}
//       {/* <KategoriPelatihan   /> */}
//       <AdminDashboard />
//       {/* <Login /> */}
//       {/* <Register /> */}
//       {/* < Pengetahuan /> */}
//       {/* <Ban /> */}
//       {/* <Data /> */}
//       {/* <Ewall /> */}
//       {/* <Cred /> */}

//     </div>
//   );
// }

// export default App;








import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'flowbite';

                    // users


import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import KategoriPelatihan from './Pages/KategoriPelatihan';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Regis from './Pages/Register';
import Ban from './Pages/Pembayaran/Bank';
import Data from './Pages/Pembayaran/Data';
import Ewall from "./Pages/Pembayaran/Ewall";
import Cred from "./Pages/Pembayaran/Cred";
import PusatPengetahuan2 from "./Pages/PusatPengetahuan2/PusatPengetahuan2";
import Payment from "./Pages/PaymentHistory/Payment";
import Profil from "./Pages/Profil";


                    // admin 


// import Users from './components/Admin/User/Users';
// import AddUser from './components/Admin/User/AddUser';
// import EditUser from './components/Admin/User/EditUser';
// import NavSideBar from "./components/Admin/Sidebar";
// import Dashboard from './components/Admin/Dashboard/Dashboard';
// import PelatihanSaya from './components/Admin/PelatihanSaya/PelatihanSaya';
// import Materi from './components/Admin/PelatihanSaya/Materi';
// import Detail from './components/Admin/PelatihanSaya/Detail';
// import RiwayatKuis from './components/Admin/PelatihanSaya/RiwayatKuis';
// import Sertifikat from './components/Admin/Sertifikat/Sertifikat';
// import PaymentHistory from './components/Admin/PaymentHistory/PaymentHistory';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
         {/* User */}

      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/kategori" element={<KategoriPelatihan />} />
      <Route path="/hal-pembayaran" element={<Data />} />
      <Route path="/bank" element={<Ban />} />
      <Route path="/E-wallet" element={<Ewall />} />
      <Route path="/credit-card" element={<Cred />} /> 
      <Route path="/pusat-pengetahuan" element={<PusatPengetahuan2 />} />
      <Route path="/payment-history" element={<Payment />} />
      <Route path="/profile" element={<Profil />} />  
      <Route path="/dashboard/regis" element={<Regis />} />
   


         {/* admin */}
{/*         
       <Route path="/admin/*" element={<NavSideBar />} />
         </Routes>


       <Routes>
      <Route path='/admin/Dashboard' element={<Dashboard />} />
      <Route path='/admin/Pelatihan' element={<PelatihanSaya />} />
      <Route path='/admin/Pelatihan/Materi' element={<Materi />} />
      <Route path='/admin/Pelatihan/Detail' element={<Detail />} />
      <Route path='/admin/Dashboard/Kuis' element={<RiwayatKuis />} />
      <Route path='/admin/Sertifikat' element={<Sertifikat />} />
      <Route path='/admin/PaymentHistory' element={<PaymentHistory />} />
      </Routes>

            <Routes>
              <Route path='/admin/Users' element={<Users />} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;

