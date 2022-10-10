import dp from '../../assets/dp.png'
import dp2 from '../../assets/img9.png'

import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'
import { useState } from 'react'



export const Activity = () => {


    const [eventOpt, seteventOpt] = useState(false);


    const showEventOption = () => {
        seteventOpt(!eventOpt);
    }

    return (
        <>

            <section className=' space-y-6'>
                <section className='shadow shadow-slate-400 rounded-lg space-y-4 pt-2 pb-4'>

                    <div className=' border-b pb-2'>
                        <div className='flex justify-between px-4'>
                            <p className='font-medium'>You might </p>
                            <p className='text-sm text-orange-600 font-semibold'>See all</p>
                        </div>
                    </div>



                    <div className="flex px-4 gap-3 items-center">
                        <div>
                            <img src={dp} alt="img" className='w-8 rounded-full' />
                        </div>

                        <div>
                            <p className='text-sm font-bold'>Emma</p>
                            <p className='text-xs'>CEO of 5star</p>
                        </div>
                    </div>

                    <div className='flex px-4 gap-6'>
                        <div className=''>
                            <button className='border-orange-600 border px-4 2xl:px-6 py-1.5 text-orange-600 rounded shadow shadow-orange-200 text-sm'>Ignore</button>
                        </div>

                        <div className=''>
                            <button className='bg-orange-600  text-white px-4 2xl:px-6 py-1.5 rounded shadow shadow-orange-200 text-sm'>Connect</button>
                        </div>
                    </div>
                </section>

                <section className='relative shadow shadow-slate-400 rounded-lg space-y-4 pt-2 pb-4'>

                    <div className=' border-b pb-2'>
                        <div className='flex justify-between px-4'>
                            <p className='font-medium'>Recent Events </p>
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
                </section>

                <section className='shadow shadow-slate-400 rounded-lg space-y-4 pt-2 pb-4'>
                    <div className=' border-b pb-2'>
                        <div className='flex justify-between px-4'>
                            <p className='font-medium'>Birthdays</p>
                            <p className='text-sm text-orange-600 font-semibold'>See all</p>
                        </div>
                    </div>



                    <div className="flex px-4 gap-3 items-center">
                        <div>
                            <img src={dp2} alt="img" className='w-8 rounded-xl' />
                        </div>

                        <div>
                            <p className='font-bold'>Timo Ley</p>
                            <p className='text-xs'>Birthday today</p>
                        </div>
                    </div>

                    <div className="flex gap-x-3 items-center justify-between px-4">

                        <div className='flex-1'>
                            <div className="flex justify-center flex-1 items-center">
                                <div className="relative w-full focus-within:text-orange-600 ">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                            <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm1.5 0a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H16.5v2.25H18a.75.75 0 010 1.5h-1.5v3a.75.75 0 01-1.5 0v-7.5zM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 001.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 00.136-.431V12a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22z" clip-rule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
                                        </svg>

                                    </div>
                                    <input className="w-full pl-3 py-3 pr-20  text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Write a comment..." aria-label="Search" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-5 h-5">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </div>
                    </div>



                    <div className='flex px-4 gap-4'>
                        <div className='bg-orange-200 py-1.5 px-3 h-9 rounded-lg'>
                            <i class="fa-solid fa-cake-candles text-orange-600"></i>
                        </div>

                        <div className=''>
                            <h1>Upcoming Birthday</h1>
                            <p className='font-medium text-sm'>See 17 others have upcoming birthdays</p>
                        </div>
                    </div>

                </section>
            </section>

        </>
    )
}