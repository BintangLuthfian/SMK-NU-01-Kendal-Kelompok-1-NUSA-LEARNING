import Footer from "../components/Dashboard/Footer";
import Navbar from "../components/isi pengetahuan/Navbar";
import Nomer2 from '../components/Dashboard/Nomer2';
import Nomer3 from "../components/Dashboard/Nomer3";
import Nomer4 from "../components/Dashboard/Nomer4";

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