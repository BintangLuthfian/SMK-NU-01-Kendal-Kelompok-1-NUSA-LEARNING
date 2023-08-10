import Footer from "../components/TampilanSemuaUnit/Footer";
import Navbar from "../components/TampilanSemuaUnit/Navbar";
import Nomer2 from '../components/TampilanSemuaUnit/Nomer2';
import Nomer3 from "../components/TampilanSemuaUnit/Nomer3";
import Nomer4 from "../components/TampilanSemuaUnit/Nomer4";

function Home() {
    return (
        <>
            <div className="bg-white">
                <Navbar />
                <Nomer2 />
                <Nomer3 />
                <Nomer4 />
                <Footer />
            </div>
        </>
    )
}

export default Home;