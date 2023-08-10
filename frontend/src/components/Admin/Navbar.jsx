function Navbar() {
    return (
        <>

            <nav className="fixed top-0 z-50 w-full bg-white border-black border-2 bg-white">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray500 rounded-lg sm:hidden hover:bg-gray100 focus:outline-none focus:ring-2 focus:ring-gray200 dark:text-gray400 dark:hover:bg-gray700 dark:focus:ring-gray600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">NusaLearning</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div className="flex">
                                    <div className="xl:mr-[86px] sm:mr-[60px]">
                                        <p className="text-right text-black font-bold text-sm">admin_NusaLearning
                                        </p>
                                        <p className="text-right text-black text-sm"> Admin</p>
                                    </div>
                                    <div className="absolute xl:top-2 xl:right-[42px] sm:right-[12px]">
                                        <button type="button" className="flex text-sm bg-white border-2 border-black rounded-full w-[46px] h-[46px]" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        </button>
                                    </div>
                                </div>
                                <div className="z-50 hidden my-4 px-4 py-3 text-base list-none bg-white divide-y divide-gray100 rounded shadow dark:bg-gray700 dark:divide-gray600" id="dropdown-user">
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-black" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-black" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-black" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-black" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;