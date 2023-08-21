
// import Navbar from "../../components/PusatPengetahuan/Navbar";  
import Footer from "../../components/PusatPengetahuan2/Footer";  
import Sidebar from "../../components/PusatPengetahuan2/Sidebar";
import Start from "../../components/PusatPengetahuan2/Start";
import Pelatihan from "../../components/PusatPengetahuan2/Pelatihan";
import Nomer from "../../components/PusatPengetahuan2/Nomer";



function PusatPengetahuan2() {
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

export default PusatPengetahuan2;
