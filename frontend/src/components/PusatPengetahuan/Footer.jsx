function Footer() {
    return (
        <>

            <div className="footer py-5 px-[62px] bg-blue text-neutral-content border border-black border-t-2">
                <div className="text-black flex justify-self-start mr-[170px]">
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
                        <h3 className="text-lg font-bold text-black">Follow Us on</h3>
                        <div className="flex mt-[4px]">
                            <a href="#">
                            <img
                                src="./Fluter/facebook.png"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => alert("Notification here")}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%"
                                }}
                            />
                            </a>
                            <a href="#">
                            <img
                                src="./Fluter/instagram (1).png"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => alert("Notification here")}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%"
                                }}
                            />
                            </a>
                            <a href="#">
                            <img
                                src="./Fluter/twitter.png"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => alert("Notification here")}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%"
                                }} 
                                />
                            </a>
                            <a href="#">
                            <img
                                src="./Fluter/youtube.png"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => alert("Notification here")}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%"
                                }} 
                                />
                            </a>
                        </div>
                    </span>
                    <span>
                        <h3 className="text-lg font-bold text-black">Download NusaLMS Mobile</h3>
                        <div className="flex mt-[4px]">
                            <div className="btn rounded-none text-black text-sm bg-white hover:bg-white border w-[112px] h-[26px] mr-4">
                            <img
                                src="./Fluter/google-play.png"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => alert("Notification here")}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%"
                                }} 
                                />
                            </div>
                            <div className="btn rounded-none text-black text-sm bg-white hover:bg-white border w-[106px] h-[26px]">
                            <img
                                src="./Fluter/app-store.png"
                                alt=""
                                className="cursor-pointer"
                                onClick={() => alert("Notification here")}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%"
                                }} 
                                />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer;