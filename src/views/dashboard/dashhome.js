import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { Theme } from "../../components/dashboard/theme";
import dp from '../../assets/dp.png'
import { Activity } from "./activity";
import { ActiveChats } from "./activeChats";



export const DashHeader = () => {



    const [mobileNav, setMobileNav] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [showProfile, setShowProfile] = useState(false);


    const toggleNav = () => {
        setMobileNav(!mobileNav)
    }

    const toggleMsg = () => {
        setShowMsg(!showMsg)
    }

    const toggleProfile = () => {
        setShowProfile(!showProfile)
    }


    const navigate = useNavigate()




    return (
        <>
            <div className={''}>
                <div className="flex flex-wrap min-h-screen">
                    {/* mobile navbar backgroun overlay */}
                    <div
                        onClick={toggleNav}
                        className={`fixed inset-0 z-10 flex items-end bg-black bg-opacity-25 sm:items-center sm:justify-center lg:hidden ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}
                    ></div>
                    <aside className={`z-20 fixed transform h-screen lg:translate-x-0 transition duration-300 ease-in-out w-72 lg:w-64 lg:mt-16 overflow-y-auto bg-white  md:block ${mobileNav ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="py-4 text-gray-500 dark:text-gray-400">
                            <div className="lg:hidden">
                                <Link to="/dashboard" className=" flex items-center space-x-3 ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
                                    <img alt="logo" src={Logo} className="w-20" />
                                </Link>
                            </div>

                            <div className="mt-6">
                                <div className="relative">
                                    <NavLink to="/dashboard" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            ></path>
                                        </svg>
                                        <span className="ml-4 ">Home</span>
                                    </NavLink>
                                </div>

                                <div className="relative">
                                    <NavLink to="path" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                                        </svg>

                                        <span className="ml-4 ">Pages</span>
                                    </NavLink>
                                </div>

                                <div className="">
                                    <NavLink to="accepted-requests" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Groups</span>
                                    </NavLink>
                                </div>


                                <div className="">
                                    <NavLink to="message" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Message</span>
                                    </NavLink>
                                </div>


                                <div className="">
                                    <NavLink to="notification" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Notification</span>
                                    </NavLink>
                                </div>


                                <div className="">
                                    <NavLink to="personal-requests" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Explore</span>
                                    </NavLink>
                                </div>


                                <div className="">
                                    <NavLink to="profile" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Profile</span>
                                    </NavLink>
                                </div>

                                <div className="">
                                    <NavLink to="settings" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">Settings</span>
                                    </NavLink>
                                </div>


                                <div className="">
                                    <NavLink to="personal-requests" onClick={toggleNav} className={({ isActive }) => (isActive ? "text-white bg-orange-600 font-medium inline-flex w-full text-sm md:text-base md:font-semibold transition-colors duration-150 px-6 py-3 rounded-tr-2xl rounded-br-2xl" : "px-6 py-3 inline-flex font-medium items-center w-full md:text-base md:font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-500")}>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                            ></path>
                                        </svg>
                                        <span className="ml-4">LogOut</span>
                                    </NavLink>
                                </div>




                            </div>
                        </div>
                    </aside>


                    <div className="flex flex-col md:flex-1 w-full">


                        <header className="z-10 py-4 bg-white h-16 fixed w-full lg:px-16">
                            <div className="flex items-center justify-between h-full px-6 text-orange-600">
                                {/* mobile hambuger */}

                                <div className="hidden lg:block">
                                    <Link to="/dashboard" className=" flex items-center space-x-3 text-lg font-bold text-gray-800 dark:text-gray-200">
                                        <img alt="logo" src={Logo} className="w-20" />
                                    </Link>
                                </div>

                                <div>
                                    <button onClick={toggleNav} className=" focus:border-2 p-1 mr-5 -ml-1 rounded-lg lg:hidden  focus:shadow-outline-purple">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>

                                {/* search bar */}
                                <div className="flex justify-center flex-1 ">
                                    <div className="relative w-full max-w-xl mr-6 focus-within:text-orange-600 text-blue-700">
                                        <div className="absolute inset-y-0 flex items-center pl-2">
                                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for something here..." aria-label="Search" />
                                    </div>
                                </div>

                                {/* notifications and profile icons */}
                                <div className="flex items-center flex-shrink-0 space-x-6">
                                    <div className="flex">
                                        <Theme />
                                    </div>

                                    <div className="relative">
                                        <button onClick={toggleProfile} className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">

                                            <img className="object-cover w-8 h-8 rounded-full" src={dp} alt="" aria-hidden="true" />

                                        </button>
                                    </div>
                                </div>

                            </div>

                        </header>

                        {/* main display */}
                        <main className="relative overflow-y-auto px-6 lg:px-14 lg:ml-64 2xl:ml-64">
                            <div className="mt-20 mb-10 xl:mt-28 xl:mb-10">
                                <Outlet/>
                            </div>
                        </main>
                    </div>
                </div >
            </div>


        </>
    )
}