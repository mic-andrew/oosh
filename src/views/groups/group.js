import { useState } from 'react';
import gcv from '../../assets/gcv.jpg'
import { About } from './about';
import { People } from './people';
import { Photo } from './photo';
import { Post } from './posts';
import { Videos } from './videos';




export const Group = () => {


    const [active, setActive] = useState("tab1");

    const handleChange = (value) => {
        setActive(value);

        if (value === "tab5" || value === "tab6"){
            showMedia();
        }
    };


    const [media, setMedia] = useState(false);

    const showMedia = () => {
        setMedia(!media)
    }




    return (
        <>

            <section className="shadow shadow-slate-400 rounded-2xl relative pb-6">
                <div>
                    <img src={gcv} alt="image" className='rounded-tl-2xl rounded-tr-2xl h-80 object-cover w-full' />
                </div>

                <div className='mt-5 px-5 md:px-10 md:flex justify-between items-center space-y-3 md:space-y-0'>
                    <div>
                        <h1 className='text-2xl font-bold'>Lilmow Connect </h1>
                        <p className='font-semibold'><i class="fa-solid fa-earth-africa mr-1"></i> Public group. 1090 members</p>
                    </div>

                    <div className='space-x-2 flex'>
                        <div>
                            <button className='py-2 px-6 bg-gray-200 rounded-lg space-x-2'> <i class="fa-solid fa-users"></i>
                                <span className='font-semibold'>Joined</span> <i class="fa-solid fa-caret-down"></i>
                            </button>
                        </div>
                        <div>
                            <button className='py-2 px-4 bg-gray-200 rounded-lg'><i class="fa-solid fa-caret-down"></i></button>
                        </div>
                    </div>
                </div>
            </section>


            <section className='my-8 space-y-6'>
                <div className=" flex flex-wrap border-b border-t py-2 md:gap-6">

                    <div className="">
                        <button
                            onClick={() => handleChange("tab1")}
                            className={`px-2 md:px-4 hover:text-orange-600 hover:bg-slate-200 py-1 md:py-2 ${active === "tab1" ? "text-orange-600 " : ""}`}
                            active={active === "tab1"}
                        >
                            <span className=" font-bold  md:text-lg">
                                About
                            </span>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={() => handleChange("tab2")}
                            className={`px-2 md:px-4 hover:text-orange-600 hover:bg-slate-200 py-1 md:py-2 ${active === "tab2" ? "text-orange-600" : ""}`} active={active === "tab2"}
                        >
                            <span className=" font-bold  md:text-lg">
                                Post
                            </span>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={() => handleChange("tab3")}
                            className={`px-2 md:px-4 hover:text-orange-600 hover:bg-slate-200 py-1 md:py-2 ${active === "tab3" ? "text-orange-600 " : ""}`} active={active === "tab3"}
                        >
                            <span className=" font-bold  md:text-lg">
                                People
                            </span>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={() => handleChange("tab4")}
                            className={`px-2 md:px-4 hover:text-orange-600 hover:bg-slate-200 py-1 md:py-2 ${active === "tab4" ? "text-orange-600 " : ""}`} active={active === "tab4"}
                        >
                            <span className=" font-bold  md:text-lg">
                                Events
                            </span>
                        </button>
                    </div>

                    <div className=" relative">
                        <button
                            onClick={showMedia}
                            className={`px-2 md:px-4 hover:text-orange-600 hover:bg-slate-200 py-1 md:py-2 ${active === "tab5" ? "text-orange-600 " : ""}`} active={active === "tab5"}
                        >
                            <span className=" font-bold  md:text-lg">
                                Media <i class="fa-solid fa-caret-down ml-1"></i>
                            </span>
                        </button>
                        {media && 
                            <div className='absolute  shadow-lg bg-white p-6  xl:p-4 space-y-3 font-semibold z-50'>
                                <div onClick={() => handleChange("tab5")} className='cursor-pointer'>Photos</div>
                                <div onClick={() => handleChange("tab6")} className='cursor-pointer'>Videos</div>
                            </div>
                        }

                    </div>


                </div>


                <div>
                    <div hidden={active !== "tab1"}>
                        <About />
                    </div>

                    <div hidden={active !== "tab2"}>
                        <Post/>
                    </div>

                    <div hidden={active !== "tab3"}>
                        <People/>
                    </div>

                    <div hidden={active !== "tab4"}>
                        Coming Soon
                    </div>

                    <div hidden={active !== "tab5"}>
                        <Photo/>
                    </div>

                    <div hidden={active !== "tab6"}>
                        <Videos/>
                    </div>

                </div>
            </section>




        </>
    )
}