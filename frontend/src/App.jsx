//  Percobaan

// import './App.css';
// import Home from "./Pages/Home";
// import AdminDashboard from './Pages/Admin Page/AdminDashboard';
// import KategoriPelatihan from './Pages/KategoriPelatihan';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Pengetahuan from './Pages/Pengetahuan';
// import Ban from "./pages/Bank";
// import Data from "./pages/Data";
// import Ewall from "./pages/Ewall";
// import Cred from "./pages/Cred";

// function App() {
//   return (
//     <div>
//       {/* <Home /> */}
//       {/* <KategoriPelatihan   /> */}
//       {/* <AdminDashboard /> */}
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







// users
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import KategoriPelatihan from './Pages/KategoriPelatihan';
import PusatPengetahuan from "./Pages/PusatPengetahuan/PusatPengetahuan";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Ban from './Pages/Bank';
import Data from './Pages/Data';
import Ewall from "./Pages/Ewall";
import Cred from "./Pages/Cred";
import Payment from "./Pages/PaymentHistory/Payment";






function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/kategori" element={<KategoriPelatihan />} />
       <Route path="/hal-pembayaran" element={<Data />} />
       <Route path="/bank" element={<Ban />} />
       <Route path="/E-wallet" element={<Ewall />} />
       <Route path="/credit-card" element={<Cred />} />
       <Route path="/pusat-pengetahuan" element={<PusatPengetahuan />} />
       <Route path="/payment-history" element={<Payment />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;





//admin

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminDashboard from './Pages/Admin Page/AdminDashboard';
// import './App.css';



// function App() {
// return (
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<AdminDashboard />} />
// <Route path="/" element={< />} />
// <Route path="/" element={< />} />
// <Route path="/" element={< />} />
// </Routes>
// </BrowserRouter>
// );
// }

// export default App;
