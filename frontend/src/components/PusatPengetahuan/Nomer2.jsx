import Programmer from "../../../public/Logo/Programmer.png";

function Nomer2() {
    return (
        <>
            <div className="flex w-full h-[223px] bg-white border-2 border-black">
                <div className="w-[803px] h-full">
                    <img src={Programmer} alt="" className="absolute top-[69px] left-[36px] xl:left-[96px] w-[349px] h-[218px]" />
                </div>
                <div className="w-[1599px] lg:w-[1199px] md:w-[809px] sm:w-[489px]">
                    <h3 className="font-[Poppins] text-red text-lg mt-[31px]">Banner Iklan</h3>
                    <p className="text-black text-sm mr-[49px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis. Fusce sodales ligula ut nibh finibus, at ultricies odio interdum. Etiam ac sapien euismod, fringilla lacus nec, feugiat massa. Suspendisse in arcu enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce aliquet malesuada quam, ut hendrerit risus eleifend in. Nulla facilisi. Aliquam tincidunt odio nunc, sit amet feugiat quam convallis nec. Morbi laoreet nunc sed lacus elementum lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec varius libero augue, eget varius tellus cursus non.</p>
                </div>
            </div>
        </>
    )
}

export default Nomer2