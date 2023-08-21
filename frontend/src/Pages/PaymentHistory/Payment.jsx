
// import Navbar from "../../components/PusatPengetahuan/Navbar";  
import Footer from "../../components/PaymentHistory/Footer";  
import Sidebar from "../../components/PaymentHistory/Sidebar";
import Start from "../../components/PaymentHistory/Start";
import Pelatihan from "../../components/PaymentHistory/Pelatihan";
import Nomer from "../../components/PaymentHistory/Nomer";

function Payment() {
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

export default Payment;
