import { useState } from 'react'
import gcv from '../../assets/events.png'
import event from '../../assets/evt.png'
import map from '../../assets/map.png'




export const Events = () => {


    const [showMap, setShowMap] = useState(false)


    const showTheMap = () => {
        setShowMap(!showMap)
    }





    return (
        <>

            <section className="shadow shadow-slate-400 rounded-2xl relative pb-6 space-y-10">
                <div>
                    <img src={gcv} alt="imag" className='rounded-tl-2xl rounded-tr-2xl h-80 object-cover w-full' />
                </div>

                <div className='px-5 md:px-10 md:flex flex-wrap justify-between items-end space-y-3 border-b pb-6'>
                    <div >
                        <p className='text-sm font-bold'>Feb 15</p>
                        <h1 className='text-2xl font-bold'>LAGOS TECH FEST </h1>
                        <p className='font-bold'>Were popping up in Lagos AGAIN !!!</p>
                        <p className='font-bold'>By <span className="text-orange-600">Eventhive.ng</span> </p>
                    </div>

                    <div className=' flex gap-3 items-center'>
                        <p className=''>111.5k followers </p>
                        <button className='border-2 px-5 py-1 rounded border-orange-600 text-orange-600 font-semibold'>Follow</button>
                    </div>

                    <div className=' space-y-2 text-center flex xl:block items-center justify-between md:w-full xl:w-auto'>
                        <div>
                            <button className='border rounded-full px-3 py-2'><i class="fa-solid fa-heart text-red-600" ></i></button>
                        </div>

                        <div className='shadow shadow-slate-400 bg-white text-center p-4 w-56 rounded-md'>
                            <p className='font-bold'>Free</p>
                            <button className='w-full bg-red-600 text-white py-2 rounded'>Book a spot</button>
                        </div>
                    </div>
                </div>


                <div className='px-5 md:px-10 md:flex justify-between items-start  gap-10 space-y-6 md:space-y-0 pb-6'>
                    <div className=''>
                        <h1 className='text-xl font-bold'>When and where</h1>
                        <div className='flex gap-4 items-center'>
                            <div><p className='font-bold text-orange-600'><i class="fa-solid fa-calendar-days"></i></p></div>
                            <div>
                                <p className='font-bold'>Date and time</p>
                                <p className='font-semibold text-sm text-slate-400'>Wed, Feb 15, 2023, 9:00 AM WAT</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='text-xl font-bold'>Location</h1>
                        <div className='flex gap-4 items-center space-y-2'>
                            <div><p className='font-bold text-orange-600'><i class="fa-solid fa-location-dot"></i></p></div>
                            <div className='space-y-1'>
                                <p className='font-semibold text-sm text-slate-400 mr-0 w-5/6'>Landmark Centre Water Corporation Drive #Plot 2 & 3 Annex, LA 106104</p>
                                <button onClick={showTheMap} className='text-right bg-orange-600 text-white px-4 py-1 rounded'>Show map</button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    showMap && (
                        <div>
                                <img src={map} alt="img" className='object-cover mx-auto'/>
                        </div>
                    )
                }



                <div className=' px-5 md:px-10'>
                    <h2 className='text-xl font-bold'>About this event</h2>
                    <p className='text-justify'>Now in its 3rd year, Lagos Tech Fest is a high caliber Nigeria tech-focused conference, exhibitions and networking
                        platform. The event annually provides a veritable platform for discussions and deal making between leading tech
                        stakeholders. The event focuses on addressing key developments in the African tech ecosystem while uncovering
                        the countless opportunities within the Nigerian and African tech market.

                        Lagos Tech Fest brings together entrepreneurs, disruptors, innovators, investors, venture capitalists, tech enthusiasts
                        with a view to exploring opportunities and navigating challenges within the tech ecosystem. The event annually
                        creates a platform for stakeholders in the tech industry to learn, transfer knowledge and network.

                        The event annually provides an unrivaled platform to identify opportunities and plan strategies by having a strong
                        understanding of the investment opportunities in the country’s tech ecosystem. Driving Investment has been at the core
                        of the event strategy, We provide an opportunity to develop strategies based on the latest regulatory developments.</p>
                </div>


                <div className='px-5 md:px-10 space-x-4 space-y-3'>
                    <h2 className='text-xl font-bold'>Eventhive.ng</h2>
                    <button className='border-2 px-5 py-1 rounded border-orange-600 text-orange-600 font-semibold'>Follow</button>
                    <button className='border-2 px-5 py-1 rounded border-orange-600 text-orange-600 font-semibold'>Message</button>

                </div>

                <div className='space-y-10 px-5 md:px-10'>
                    <div className='flex justify-between items-center '>
                        <div><h2 className='text-xl font-bold'>Other events you may like</h2></div>

                        <div className='invisible flex gap-3 '>
                            <div className='bg-black text-white px-3 rounded-md py-1'><i class="fa-solid fa-arrow-left"></i></div>
                            <div className='bg-black text-white px-3 rounded-md py-1'><i class="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        <div className='shadow shadow-slate-400 rounded-lg space-y-4 relative'>
                            <div className='flex items-center gap-4 p-5'>
                                <div><img src={event} className="w-16" alt='img' /> </div>
                                <div>
                                    <h2 className='text-3xl font-bold'>Finance Start-up</h2>
                                    <div className='absolute right-4'> <button className='border rounded-full px-3 py-2'><i class="fa-solid fa-heart text-red-600" ></i></button></div>
                                </div>
                            </div>
                            <div className='bg-slate-100 p-5'>
                                <h4 className='font-bold text-xl'>Finance and Career in Tech Expo</h4>
                                <p>Sat, Oct 29, 9:00 AM</p>
                                <p>Tayo Aderinokun Lecture Theatre • Lagos, LA Free</p>
                            </div>
                        </div>

                        <div className='shadow shadow-slate-400 rounded-lg space-y-4 relative'>
                            <div className='flex items-center gap-4 p-5'>
                                <div><img src={event} className="w-16" alt='img' /> </div>
                                <div>
                                    <h2 className='text-3xl font-bold'>Finance Start-up</h2>
                                    <div className='absolute right-4'> <button className='border rounded-full px-3 py-2'><i class="fa-solid fa-heart text-red-600" ></i></button></div>
                                </div>
                            </div>
                            <div className='bg-slate-100 p-5'>
                                <h4 className='font-bold text-xl'>Finance and Career in Tech Expo</h4>
                                <p>Sat, Oct 29, 9:00 AM</p>
                                <p>Tayo Aderinokun Lecture Theatre • Lagos, LA Free</p>
                            </div>
                        </div>

                        <div className='shadow shadow-slate-400 rounded-lg space-y-4 relative'>
                            <div className='flex items-center gap-4 p-5'>
                                <div><img src={event} className="w-16" alt='img' /> </div>
                                <div>
                                    <h2 className='text-3xl font-bold'>Finance Start-up</h2>
                                    <div className='absolute right-4'> <button className='border rounded-full px-3 py-2'><i class="fa-solid fa-heart text-red-600" ></i></button></div>
                                </div>
                            </div>
                            <div className='bg-slate-100 p-5'>
                                <h4 className='font-bold text-xl'>Finance and Career in Tech Expo</h4>
                                <p>Sat, Oct 29, 9:00 AM</p>
                                <p>Tayo Aderinokun Lecture Theatre • Lagos, LA Free</p>
                            </div>
                        </div>
                    </div>
                </div>







            </section>

        </>
    )
}