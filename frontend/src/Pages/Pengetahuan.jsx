import Pelatihan from '../components/isi pengetahuan/Pelatihan'
import Modul from '../components/isi pengetahuan/Modul';
import Footer from "../components/TampilanSemuaUnit/Footer";  
import Navbar from "../components/KategoriPelatihan/Navbar";

function Pengetahuan() {
  return (
    <div className="App">
      <Navbar />
      <Pelatihan/>
      <Modul/>
      <Footer />
    </div>
  );
}

export default Pengetahuan;
