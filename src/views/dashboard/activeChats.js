import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'

import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'

import dp from '../../assets/dp.png'
import { useState } from 'react'
import ReactSwitch from 'react-switch'



export const ActiveChats = () => {



    const [sound, setSound] = useState(false);
    const [not, setNot] = useState(false)


    const soundSetting = () => {
        setSound(!sound);
    }

    const toggleSound = () => {
        setNot(!not)
        console.log("we are here")
    }



    return (
        <>
            <section className='space-y-6'>
                <section>
                    <div className='space-y-4   '>
                        <div className="flex justify-center  ">
                            <div className="relative w-full max-w-xl mr-6 focus-within:text-orange-600 text-blue-700">
                                <div className="absolute inset-y-0 flex items-center pl-2">
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for something here..." aria-label="Search" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className='w-1/6'>
                                <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                                <p className='text-xs text-center'>Lilmow</p>
                            </div>
                            <div className='w-1/6'>
                                <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                                <p className='text-xs text-center'>Ayo</p>
                            </div>
                            <div className='w-1/6'>
                                <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                                <p className='text-xs text-center'>Emmma</p>
                            </div>
                            <div className='w-1/6'>
                                <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                                <p className='text-xs text-center'>Ana</p>
                            </div>
                            <div className='w-1/6'>
                                <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                                <p className='text-xs text-center'>Grace</p>
                            </div>
                            <div className='w-1/6'>
                                <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                                <p className='text-xs text-center'>Moses</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='relative'>
                    <div className=' border-b pb-2'>
                        <div className='flex justify-between px-4'>
                            <p className='font-medium'>Friends </p>
                            <button onClick={soundSetting} className='text-sm text-orange-600 font-semibold'><i class="fa-solid fa-ellipsis"></i></button>
                        </div>
                        {
                            sound && (
                                <div className='absolute z-40 shadow shadow-slate-400 rounded-lg space-y-3  bg-white w-full top-10 p-3'>

                                    <div className='flex items-center justify-between'>
                                        <div className='flex gap-2'>
                                            <div><i class="fa-solid fa-volume-xmark text-sm text-orange-600"></i></div>
                                            <div><p className='font-medium text-sm'>Message Sound</p></div>
                                        </div>
                                        <div><ReactSwitch onChange={toggleSound} checked={not === true} /></div>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div className='flex gap-2'>
                                            <div><i class="fa-solid fa-phone-volume text-orange-600"></i></div>
                                            <div className='font-medium text-sm'>Call Sound</div>
                                        </div>
                                        <div><ReactSwitch onChange={toggleSound} checked={not === true} /></div>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div className='flex gap-2'>
                                            <div><i class="fa-solid fa-bell-slash text-orange-600"></i></div>
                                            <div><p className='font-medium text-sm'>Turn off active sound</p></div>
                                        </div>
                                        <div><ReactSwitch onChange={toggleSound} checked={not === true} /></div>
                                    </div>

                                </div>
                            )
                        }
                    </div>

                    <div className='overflow-y-scroll h-screen space-y-5 w-full px-2 py-5'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img7} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Emma Lu</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img9} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img9} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img7} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Emma Lu</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img9} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Timo Ley</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img7} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'><i class="fa-solid fa-circle text-green-500"></i></p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy</p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={img8} alt="imgae" className='rounded-full w-9' />
                                </div>

                                <div>
                                    <p className='text-sm font-medium'>Ayo Boy </p>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs'>2 mins</p>
                            </div>
                        </div>
                    </div>
                </section>


            </section>

        </>
    )
}