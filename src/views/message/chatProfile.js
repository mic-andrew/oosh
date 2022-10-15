import { useState } from "react";

import img9 from '../../assets/img9.png'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'






















export const ChatProfile = (props) => {


    let { handleAcc, acc } = props;


    // accordion
    const [expanded, setExpanded] = useState(false);

    const handleChangeAcc = (panel) => {
        if (expanded === panel) {
            setExpanded(false)
        } else {
            setExpanded(panel)
        }
    };



    return (
        <>

            <div className={` backdrop-blur-lg w-full overflow-y-scroll md:w-80 xl:w-1/4 md:h-full bg-white/30 mt-5 min-h-screen space-y-6 inset-y-0 right-0 top-0 2xl:top-12  shadow-2xl transform fixed transition duration-300 ease-in-out z-40 ${acc ? "translate-x-0" : "translate-x-full"}`}>

                <div className="border-b py-2 bg-white">
                    <div className="items-center flex flex-wrap px-6 justify-between">
                        <h2 className="text-base font-bold">User Profile</h2>
                        <button onClick={handleAcc} className="bg-slate-50 rounded px-6 py-2.5 shadow shadow-slate-400 text-orange-600"><i className="text-base fa-solid fa-xmark"></i></button>
                    </div>
                </div>

                <div className="px-6">
                    <div className="bg-slate-50 p-4 shadow shadow-slate-400 rounded-lg space-y-4">
                        <img src={img9} alt="" className="rounded-full w-28 mx-auto" />
                        <div>
                            <h1 className="text-xl text-center font-bold">David Adedamola</h1>
                            <p className="text-sm text-center">Affilate Marketer</p>
                            <div className='flex gap-2 text-xs 2xl:text-base items-start font-medium justify-center mt-2'>
                                <p className="font-semibold">Active now</p>
                                <div><i class="fa-solid fa-circle text-green-500 text-xs"></i></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="px-6">
                    <div className="bg-slate-50 p-4 shadow shadow-slate-400 rounded-lg space-y-4">
                        <p className="font-bold border-b pb-2">Privacy & Support</p>

                        <div className="space-y-2 px-4">
                            <p> <i class="fa-solid fa-check w-6"></i> Mark as unread</p>
                            <p><i class="fa-solid fa-volume-xmark w-6"></i> Mute conversation</p>
                            <p> <i class="fa-solid fa-ban w-6"></i> Block</p>
                            <p> <i class="fa-solid fa-trash-can w-6"></i>Delete chat</p>
                        </div>
                    </div>
                </div>


                <div className="px-6">
                    <div className="bg-slate-50 p-4 shadow shadow-slate-400 rounded-lg space-y-4">
                        <p className="font-bold border-b pb-2">Shared Files</p>

                        <div className="space-y-2 px-4">

                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleChangeAcc("panel1")}>
                                <div className="flex items-center gap-4">
                                    <div className="text-orange-600"><i className={`fa-solid fa-file`}></i></div>
                                    <div>
                                        <p className="text-sm font-semibold">Documents</p>
                                        <p className="text-[10px] text-slate-600"><span>100 files</span> <span>95mb</span></p>
                                    </div>
                                </div>
                                <div><i className={`fa-solid fa-angle-right ${expanded !== "panel1" ? "rotate-0" : "rotate-90"}`}></i></div>
                            </div>

                            <div hidden={expanded !== 'panel1'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                                <p>No Documents for now</p>
                            </div>






                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleChangeAcc("panel2")}>
                                <div className="flex items-center gap-4">
                                    <div className="text-orange-600"><i class="fa-solid fa-image"></i></div>
                                    <div>
                                        <p className="text-sm font-semibold">Photos</p>
                                        <p className="text-[10px] text-slate-600"><span>100 files</span> <span>95mb</span></p>
                                    </div>
                                </div>
                                <div><i className={`fa-solid fa-angle-right ${expanded !== "panel2" ? "rotate-0" : "rotate-90"}`}></i></div>
                            </div>


                            <div hidden={expanded !== 'panel2'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                                <div class="grid grid-cols-3 gap-1.5 md:gap-4">
                                    <div>
                                        <img src={img1} alt="welcome" className=' w-24  h-24    rounded' />
                                    </div>
                                    <div>
                                        <img src={img2} alt="welcome" className=' w-24  h-24    rounded ' />
                                    </div>
                                    <div>
                                        <img src={img2} alt="welcome" className=' w-24  h-24    rounded ' />
                                    </div>
                                    <div>
                                        <img src={img3} alt="welcome" className=' w-24  h-24    rounded' />
                                    </div>
                                    <div>
                                        <img src={img3} alt="welcome" className=' w-24  h-24    rounded' />
                                    </div>
                                    <div>
                                        <img src={img3} alt="welcome" className=' w-24  h-24    rounded' />
                                    </div>

                                </div>
                            </div>




                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleChangeAcc("panel3")}>
                                <div className="flex items-center gap-4">
                                    <div className="text-orange-600"><i class="fa-brands fa-youtube"></i></div>
                                    <div>
                                        <p className="text-sm font-semibold">Videos</p>
                                        <p className="text-[10px] text-slate-600"><span>100 files</span> <span>95mb</span></p>
                                    </div>
                                </div>
                                <div><i className={`fa-solid fa-angle-right ${expanded !== "panel3" ? "rotate-0" : "rotate-90"} `}></i></div>
                            </div>

                            <div hidden={expanded !== 'panel3'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                                <p>No Documents for now</p>
                            </div>






                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleChangeAcc("panel4")}>
                                <div className="flex items-center gap-4">
                                    <div className="text-orange-600"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                    <div>
                                        <p className="text-sm font-semibold">Others</p>
                                        <p className="text-[10px] text-slate-600"><span>100 files</span> <span>95mb</span></p>
                                    </div>
                                </div>
                                <div><i className={`fa-solid fa-angle-right ${expanded !== "panel4" ? "rotate-0" : "rotate-90"}`}></i></div>
                            </div>

                            <div hidden={expanded !== 'panel4'} className="shadow text-xs bg-white py-5 px-4 z-40 rounded-md space-y-2.5 ">
                                <p>No Documents for now</p>
                            </div>




                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}