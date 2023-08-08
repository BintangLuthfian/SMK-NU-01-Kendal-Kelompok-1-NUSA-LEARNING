import Navbar from "../components/isi pengetahuan/Navbar";
import Pelatihan from '../components/isi pengetahuan/Pelatihan'
import Modul from '../components/isi pengetahuan/Modul';
import Footer from "../components/PusatPengetahuan/Footer";  


function Pengetahuan() {
  return (
    <div className="App">
      <div>
      <Navbar />
      </div>
      <Pelatihan/>
      <div>
      <Modul/>
      </div>
      <Footer />
    </div>
  );
}

export default Pengetahuan;
