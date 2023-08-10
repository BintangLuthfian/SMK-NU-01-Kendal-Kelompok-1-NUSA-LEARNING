import React, { useRef, useState } from 'react';
import tutorialHTMLuntukpemula from "../../../public/Logo/tutorialHTMLuntukpemula.png";

function Nomer4() {

    const scrollContainerRef = useRef(null);
    const [isScrollAtStart, setIsScrollAtStart] = useState(true);
    const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);
    const [dragStart, setDragStart] = useState(null);

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        setIsScrollAtStart(container.scrollLeft === 0);
        setIsScrollAtEnd(
            container.scrollLeft + container.offsetWidth >= container.scrollWidth
        );
    };

    const scrollTo = (scrollOffset) => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        setDragStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        if (dragStart !== null) {
            const container = scrollContainerRef.current;
            const dragDistance = e.clientX - dragStart;
            container.scrollLeft -= dragDistance;
            setDragStart(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setDragStart(null);
    };

    const scrollToNext = () => {
        const container = scrollContainerRef.current;
        if (!isScrollAtEnd) {
            scrollTo(container.offsetWidth);
        }
    };

    const scrollToPrevious = () => {
        const container = scrollContainerRef.current;
        if (!isScrollAtStart) {
            scrollTo(-container.offsetWidth);
        }
    };

    return (
        <>
            <div
                className="w-full h-[460px] relative"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <h3 className="inline-block font-bold text-lg text-black ml-[46px] mt-[18px]">Pelatihan</h3>
                <p className="flex justify-start text-black ml-[46px] mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis. </p>
                <button className='flex justify-center items-center active:text-xs text-white cursor-pointer text-[14px] active:text-xs hover:bg-red bg-red rounded active:w-[150px] active:h-[23px] absolute active:right-[30px] right-[25px] active:top-14 top-[52px] w-[163px] h-[25px]'>
                    <span className='flex items-center select-none'>
                        Tampilkan semua
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-3 w-5 h-5 active:w-[16px] active:h-[16px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </button>
                <div
                    className="flex overflow-x-scroll hide-scroll-bar"
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                >
                    <div className="flex h-fit ml-[29px] py-[21px]">
                        <div className="px-[17px]">
                            <div className="btn border-l border-r border-b border-t-0 border-red rounded-none bg-white grid hover:bg-white text-black w-[317px] h-[288px] relative">
                                <div className="bg-yellow400 flex place-self-stretch justify-center items-center w-[317px] h-[135px]">
                                    <img src={tutorialHTMLuntukpemula} alt="" />
                                </div>
                                <div className='table ml-[16px]'>
                                    <h3 className='text-lg font-[Poppins] text-left'>Judul Pelatihan </h3>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <br />
                                    <p className='text-xs mt-[7px]'>
                                        Dibuat oleh: <br />
                                        Untuk:
                                    </p>
                                    <div className='flex text-xs mt-[8px]'>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[17px] h-[17px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>4,8</p>
                                        </span>
                                        <span className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-sm text-white outline-0 border-none rounded-tl-lg bg-red flex justify-center items-center absolute right-0 bottom-0 w-[97px] h-[25px]'>
                                    Rp 100.000,-
                                </div>
                            </div>
                        </div>
                        <div className="px-[17px]">
                            <div className="btn border-l border-r border-b border-t-0 border-red  rounded-none bg-white grid hover:bg-white text-black w-[317px] h-[288px] relative">
                                <div className="bg-yellow400 flex place-self-stretch justify-center items-center w-[317px] h-[135px]">
                                    <img src={tutorialHTMLuntukpemula} alt="" />
                                </div>
                                <div className='table ml-[16px]'>
                                    <h3 className='text-lg font-[Poppins] text-left'>Judul Pelatihan </h3>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <br />
                                    <p className='text-xs mt-[7px]'>
                                        Dibuat oleh: <br />
                                        Untuk:
                                    </p>
                                    <div className='flex text-xs mt-[8px]'>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[17px] h-[17px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>4,8</p>
                                        </span>
                                        <span className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-sm text-white outline-0 border-none rounded-tl-lg bg-red flex justify-center items-center absolute right-0 bottom-0 w-[97px] h-[25px]'>
                                    Rp 100.000,-
                                </div>
                            </div>
                        </div>
                        <div className="px-[17px]">
                            <div className="btn border-l border-r border-b border-t-0 border-red  rounded-none bg-white grid hover:bg-white text-black w-[317px] h-[288px] relative">
                                <div className="bg-yellow400 flex place-self-stretch justify-center items-center w-[317px] h-[135px]">
                                    <img src={tutorialHTMLuntukpemula} alt="" />
                                </div>
                                <div className='table ml-[16px]'>
                                    <h3 className='text-lg font-[Poppins] text-left'>Judul Pelatihan </h3>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <br />
                                    <p className='text-xs mt-[7px]'>
                                        Dibuat oleh: <br />
                                        Untuk:
                                    </p>
                                    <div className='flex text-xs mt-[8px]'>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[17px] h-[17px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>4,8</p>
                                        </span>
                                        <span className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-sm text-white outline-0 border-none rounded-tl-lg bg-red flex justify-center items-center absolute right-0 bottom-0 w-[97px] h-[25px]'>
                                    Rp 100.000,-
                                </div>
                            </div>
                        </div>
                        <div className="px-[17px]">
                            <div className="btn border-l border-r border-b border-t-0 border-red  rounded-none bg-white grid hover:bg-white text-black w-[317px] h-[288px] relative">
                                <div className="bg-yellow400 flex place-self-stretch justify-center items-center w-[317px] h-[135px]">
                                    <img src={tutorialHTMLuntukpemula} alt="" />
                                </div>
                                <div className='table ml-[16px]'>
                                    <h3 className='text-lg font-[Poppins] text-left'>Judul Pelatihan </h3>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <br />
                                    <p className='text-xs mt-[7px]'>
                                        Dibuat oleh: <br />
                                        Untuk:
                                    </p>
                                    <div className='flex text-xs mt-[8px]'>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[17px] h-[17px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>4,8</p>
                                        </span>
                                        <span className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-sm text-white outline-0 border-none rounded-tl-lg bg-red flex justify-center items-center absolute right-0 bottom-0 w-[97px] h-[25px]'>
                                    Rp 100.000,-
                                </div>
                            </div>
                        </div>
                        <div className="px-[17px]">
                            <div className="btn border-l border-r border-b border-t-0 border-red  rounded-none bg-white grid hover:bg-white text-black w-[317px] h-[288px] relative">
                                <div className="bg-yellow400 flex place-self-stretch justify-center items-center w-[317px] h-[135px]">
                                    <img src={tutorialHTMLuntukpemula} alt="" />
                                </div>
                                <div className='table ml-[16px]'>
                                    <h3 className='text-lg font-[Poppins] text-left'>Judul Pelatihan </h3>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <br />
                                    <p className='text-xs mt-[7px]'>
                                        Dibuat oleh: <br />
                                        Untuk:
                                    </p>
                                    <div className='flex text-xs mt-[8px]'>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[17px] h-[17px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                        <span className='flex mr-[8px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                            <p>4,8</p>
                                        </span>
                                        <span className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                            </svg>
                                            <p>3</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-sm text-white outline-0 border-none rounded-tl-lg bg-red flex justify-center items-center absolute right-0 bottom-0 w-[97px] h-[25px]'>
                                    Rp 100.000,-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isScrollAtStart && (
                    <button
                        className="bg-white border border-black text-black font-bold rounded-full w-[35px] h-[35px] absolute top-[250px] left-[5px]"
                        onClick={scrollToPrevious}
                    >
                        <div className='grid grid-cols-1'>
                            <svg
                                xmlns="http:www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="place-self-center w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </div>
                    </button>
                )}
                {!isScrollAtEnd && (
                    <button
                        className="bg-white border border-black text-black font-bold rounded-full w-[35px] h-[35px] absolute top-[250px] right-[5px]"
                        onClick={scrollToNext}
                    >
                        <div className='grid grid-cols-1'>
                            <svg
                                xmlns="http:www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="place-self-center w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                    </button>
                )}
            </div>
        </>
    )
}

export default Nomer4;