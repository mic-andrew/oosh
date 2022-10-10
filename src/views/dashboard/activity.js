import dp from '../../assets/dp.png'

import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'



export const Activity = () => {
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

                <section className='shadow shadow-slate-400 rounded-lg space-y-4 pt-2 pb-4'>

                    <div className=' border-b pb-2'>
                        <div className='flex justify-between px-4'>
                            <p className='font-medium'>Recent Events </p>
                            <p className='text-sm text-orange-600 font-semibold'><i class="fa-solid fa-ellipsis"></i></p>
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
            </section>

        </>
    )
}