import { useState } from 'react'
import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'



export const PageGroup = () => {


    const [eventOpt, seteventOpt] = useState(false);


    const showEventOption = () => {
        seteventOpt(!eventOpt);
    }




    return (
        <>

            <section className='relative shadow shadow-slate-400 rounded-lg space-y-4 pt-2 pb-4'>

                <div className=' border-b pb-2'>
                    <div className='flex justify-between px-4'>
                        <p className='font-medium'>Related Groups </p>
                        <button onClick={showEventOption} className='text-sm text-orange-600 font-semibold'><i class="fa-solid fa-ellipsis"></i></button>
                    </div>
                </div>

                {
                    eventOpt && (
                        <div className='absolute z-40 shadow shadow-slate-400 rounded-lg space-y-3  bg-white right-0 top-6 p-3'>

                            <div className='flex justify-between'>
                                <div className='flex gap-2'>
                                    <div><i class="fa-solid fa-eye-slash text-orange-600 text-sm"></i></div>
                                    <div><p className='font-medium text-sm'>Hide Event</p></div>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex gap-2'>
                                    <div><i class="fa-solid fa-triangle-exclamation text-orange-600 text-sm"></i></div>
                                    <div className='font-medium text-sm'>Report Event </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="px-4">
                    <div className='border-b pb-1'>
                        <p className='text-sm font-bold'>LAGOS TECH FEST.</p>
                        <p className='text-xs'>Landmark Centre • Annex, LA</p>
                    </div>
                    <div className='flex justify-between pt-1 items-center px-3'>
                        <p className='font-medium text-sm'> 900 Seen</p>
                        <div className='flex -space-x-4'>
                            <div className=''>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=' '>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4">
                    <div className='border-b pb-1'>
                        <p className='text-sm font-bold'>Tech Expo by AgoraX</p>
                        <p className='text-xs'>41 Adeyemo Akapo St • Ikeja, LA</p>
                    </div>
                    <div className='flex justify-between pt-1 items-center px-3'>
                        <p className='font-medium text-sm'> 900 Seen</p>
                        <div className='flex -space-x-4'>
                            <div className=''>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=' '>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4">
                    <div className='border-b pb-1'>
                        <p className='text-sm font-bold'>Tech Expo by AgoraX</p>
                        <p className='text-xs'>41 Adeyemo Akapo St • Ikeja, LA</p>
                    </div>
                    <div className='flex justify-between pt-1 items-center px-3'>
                        <p className='font-medium text-sm'> 900 Seen</p>
                        <div className='flex -space-x-4'>
                            <div className=''>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=' '>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4">
                    <div className='border-b pb-1'>
                        <p className='text-sm font-bold'>LAGOS TECH FEST.</p>
                        <p className='text-xs'>Landmark Centre • Annex, LA</p>
                    </div>
                    <div className='flex justify-between pt-1 items-center px-3'>
                        <p className='font-medium text-sm'> 900 Seen</p>
                        <div className='flex -space-x-4'>
                            <div className=''>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=' '>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4">
                    <div className='border-b pb-1'>
                        <p className='text-sm font-bold'>Tech Expo by AgoraX</p>
                        <p className='text-xs'>41 Adeyemo Akapo St • Ikeja, LA</p>
                    </div>
                    <div className='flex justify-between pt-1 items-center px-3'>
                        <p className='font-medium text-sm'> 900 Seen</p>
                        <div className='flex -space-x-4'>
                            <div className=''>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=' '>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4">
                    <div className='border-b pb-1'>
                        <p className='text-sm font-bold'>LAGOS TECH FEST.</p>
                        <p className='text-xs'>Landmark Centre • Annex, LA</p>
                    </div>
                    <div className='flex justify-between pt-1 items-center px-3'>
                        <p className='font-medium text-sm'> 900 Seen</p>
                        <div className='flex -space-x-4'>
                            <div className=''>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=' '>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                            <div className=''>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}