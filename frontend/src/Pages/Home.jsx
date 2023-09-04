import Footer from "../components/layout/Footersemua";
import Navbar from "../components/layout/Navbar";
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