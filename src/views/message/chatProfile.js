import { useState } from "react";
import img9 from '../../assets/img9.png'

export const ChatProfile = (props) => {


    let { handleAcc, acc } = props;


    // accordion
    const [expanded, setExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [arrow, setArrow] = useState(false);

    const handleChangeAcc = (panel) => {
        setExpanded(isExpanded ? panel : false);
        setArrow(isExpanded === panel)
        setIsExpanded(!isExpanded);
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
                            <p> <i class="fa-solid fa-check w-6"></i> Mark as unread</p>
                            <p><i class="fa-solid fa-volume-xmark w-6"></i> Mute conversation</p>
                            <p> <i class="fa-solid fa-ban w-6"></i> Block</p>
                            <p> <i class="fa-solid fa-trash-can w-6"></i>Delete chat</p>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}