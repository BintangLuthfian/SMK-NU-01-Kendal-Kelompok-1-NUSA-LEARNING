import Footer from "../components/PusatPengetahuan/Footer";
import Navbar from "../components/PusatPengetahuan/Navbar";
import Nomer2 from '../components/PusatPengetahuan/Nomer2';
import Nomer3 from "../components/PusatPengetahuan/Nomer3";
import Nomer4 from "../components/PusatPengetahuan/Nomer4";

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