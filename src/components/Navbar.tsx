import Link from "next/link"
import React from "react"

const Navbar = () => {
    return (
        <div className="bg-[#958675] min-w-fit">
            <div className="sectionContainer">
                <header className="flex justify-between px-2 py-2 sm:py-4 items-center text-xl">
                    <Link href="/" className="w-16 sm:w-20 h-auto">
                        <img src="/Alogo.svg" alt="logo" height={40} width={40} className="w-full h-full object-contain rounded-full"></img>
                    </Link>
                    <div className="hidden sm:block">
                        <nav className="flex flex-col sm:flex-row space-y-10 text-center sm:space-y-0 sm:space-x-8 font-bold text-white text-xl">
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Home
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Ranking
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Teams
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Blog
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Gallery
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Auction
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Contact
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    T & C &apos; s
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="flex flex-col items-center group">
                                    Portal
                                    <div className="w-4 border globalTransition group-hover:visible invisible"></div>
                                </div>
                            </Link>
                        </nav>
                    </div> 
                    <div className="sm:hidden flex items-center">
                        <label className="swap swap-rotate">
                            <input type="checkbox" />
                            <img src="/svg/menu.svg" alt="open menu" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="swap-off fill-current w-11 h-11" style={{color:"transparent"}} />
                            <img src="/svg/menu_close.svg" alt="close menu" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="swap-off fill-current w-11 h-11" style={{color:"transparent"}} />
                        </label>
                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                        <div className="flex justify-center items-center border rounded-full w-16 h-16">
                            <span className="text-2xl font-bold text-white">
                                <div className="flex gap-2 dropdown dropdown-button cursor-pointer">
                                    <div className="font-bold text-white text-xl">
                                        <span tabIndex={0}>EN</span>
                                        {/* <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-20 text-black">
                                            <li>
                                                <Link href="/" hrefLang="en" className="active:bg-[#958675] bg-[#958675] text-white">EN</Link>
                                            </li>
                                            <li>
                                                <Link href="/" hrefLang="es" className="active:bg-[#958675] text-white">ES</Link>
                                            </li>
                                        </ul> */}
                                    </div>
                                    <img src="/svgs/menu_down_arrow.svg" tabIndex={0} alt="down menu" className="w-4 h-auto"/>
                                </div>
                            </span>
                        </div>
                    </div>
                </header>
                
            </div>
        </div>
    )
}

export default Navbar