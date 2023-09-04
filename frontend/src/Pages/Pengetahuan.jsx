import Navbar from "../components/layout/Navbarakun";
import Pelatihan from '../components/isi pengetahuan/Pelatihan'
import Modul from '../components/isi pengetahuan/Modul';
import Footer from "../components/layout/Footersemua";


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
