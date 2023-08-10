import Facebook from "../../../public/Logo/Facebook.png";
import Instagram from "../../../public/Logo/Instagram.png";
import Twitter from "../../../public/Logo/Twitter.png";
import YouTube from "../../../public/Logo/YouTube.png";
import PlayStore from "../../../public/Logo/PlayStore.png";
import AppStore from "../../../public/Logo/AppStore.png";

function Footer() {
    return (
        <>

            <div className="footer py-5 px-[62px] bg-red text-neutral-content border border-black border-t-2">
                <div className="text-white flex justify-self-start mr-[170px]">
                    <span className="mr-[52px]">
                        <h3 className="text-lg font-bold">NusaLearning</h3>
                        <a href="#">
                            2022 NusaLearning All <br />
                            rights reserved <br />
                            PT. Solusi Teknologi Nusantara
                        </a>
                    </span>
                    <span className="mr-[52px]">
                        <h3 className="text-lg font-bold">About</h3>
                        <p className="">
                            Privacy Policy <br />
                            Help Center <br />
                            Terms & Condition
                        </p>
                    </span>
                    <span>
                        <h3 className="text-lg font-bold">Services</h3>
                        <p className="">
                            Check Certificate
                        </p>
                    </span>
                </div>
                <div className="flex justify-self-end">
                    <span className="mr-[123px]">
                        <h3 className="text-lg font-bold text-white">Follow Us on</h3>
                        <div className="flex mt-[7px]">
                            <a href="#">
                                <div className="mr-3">
                                    <img src={Facebook} alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div className="mr-3">
                                    <img src={Instagram} alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div className="mr-3">
                                    <img src={Twitter} alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <img src={YouTube} alt="" />
                                </div>
                            </a>
                        </div>
                    </span>
                    <span>
                        <h3 className="text-lg font-bold text-white">Download NusaLMS Mobile</h3>
                        <div className="flex mt-[4px]">
                            <div className="mr-3">
                                <img src={PlayStore} className="h-[35px]" alt="" />
                            </div>
                            <div>
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer;