import { useState } from "react";


import { Link } from "react-router-dom";
import { EditProfile } from "./editprofile";


export const Settings = () => {



    const [active, setActive] = useState("tab1");

    const handleChange = (value) => {
        setActive(value);
    };

    //for dropdown options
    const [drop, setDrop] = useState("drops");

    const handledrop = (e) => {
        setDrop(e);
    };


    return (
        <>

            <section
                className="md:mx-12 shadow-md rounded-xl bg-white"
            >

                <div className="block lg:flex flex-wrap">
                    <div className="lg:w-80 bg-gray-100 flex flex-wrap lg:block justify-between">
                        <div className="">
                            <button
                                onClick={() => handleChange("tab1")}
                                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:text lg:-gray-300 lg:w-full active"
                                active={active === "tab1"}
                            >

                                <i class="fa-solid fa-circle-user lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex">
                                    Edit Profile
                                </span>
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => handleChange("tab2")}
                                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:text lg:-gray-300 lg:w-full active"
                            >
                                <i class="fa-solid fa-language lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex">Language</span>
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => handleChange("tab3")}
                                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:text lg:-gray-300 lg:w-full active"
                            >
                                <i class="fa-solid fa-ban lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex">Blocking</span>
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => handleChange("tab4")}
                                className="lg:text-center p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto xl:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
                            >
                                <i class="fa-regular fa-bell lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex ">
                                    Notification
                                </span>
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => handleChange("tab5")}
                                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
                            >
                                <i class="fa-solid fa-lock lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex">Password & Security</span>
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => handleChange("tab6")}
                                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
                            >
                                <i class="fa-solid fa-clock-rotate-left lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex">Activity Log</span>
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => handleChange("tab7")}
                                className="p-4 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:p-6 text-sm font-medium md:w-28 text-center mx-auto lg:text-left text-gray-500 md:border-x md:border-y lg:border-r-2 border-transparent hover:text-orange-600 border-gray-300 dark:text-gray-400 dark:hover:textlg:-gray-300 lg:w-full active"
                            >
                                <i class="fa-solid fa-eye lg:mr-3"></i>
                                <span className=" hidden lg:inline-flex">Viewing & Sharing</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div hidden={active !== "tab1"}>
                            <EditProfile/>
                        </div>

                        <div hidden={active !== "tab2"}>
                            2
                        </div>

                        <div hidden={active !== "tab3"}>
                            3
                        </div>

                        <div hidden={active !== "tab4"}>
                            4
                        </div>

                        <div hidden={active !== "tab5"}>
                            5
                        </div>

                        <div hidden={active !== "tab6"}>
6
                        </div>

                        <div hidden={active !== "tab7"}>
                            7
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}