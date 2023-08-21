
// import Navbar from "../../components/PusatPengetahuan/Navbar";  
import Footer from "../../components/PusatPengetahuan/Footer";  
import Sidebar from "../../components/PusatPengetahuan/Sidebar";
import Start from "../../components/PusatPengetahuan/Start";
import Pelatihan from "../../components/PusatPengetahuan/Pelatihan";
import Nomer from "../../components/PusatPengetahuan/Nomer";

function PusatPengetahuan() {
  return (
    <>
   
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <Start />
      <div>
      <Pelatihan />
      </div>
      <Nomer />
    </div>
      <Footer />
     
          </>
  );
}

export default PusatPengetahuan;
