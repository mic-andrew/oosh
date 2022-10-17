import cv2 from '../../assets/cv1.jpg'
import cvdp from '../../assets/dpcv.png'
import { Activity } from '../dashboard/activity'
import { Feeds } from '../dashboard/feed'


export const Profile = () => {

    return (
        <>

            <section className='space-y-8'>
                <section className="shadow shadow-slate-400 rounded-2xl relative pb-6">
                    <div>
                        <img src={cv2} alt="image" className='rounded-tl-2xl rounded-tr-2xl h-80 object-cover w-full' />
                    </div>

                    <div className='-mt-20 px-5 md:pr-20 md:pl-10'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <img src={cvdp} alt="image" className='w-32 md:w-36' />
                            </div>

                            <div>
                                <button className='text-xs md:text-sm font-medium bg-slate-100 px-5 md:px-6 py-3 rounded-lg shadow-lg'><i class="fa-solid fa-cloud-arrow-up mr-2"></i> Edit Cover Photo</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 px-5 md:px-10 flex justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold'>David Adedamola </h1>
                            <p className='font-semibold'>Graphic Designer</p>
                        </div>

                        <div className='space-x-2'>
                            <button className='text-xs md:text-sm font-medium bg-slate-100 px-5 md:px-6 py-3 rounded-lg shadow-lg'><i class="fa-regular fa-pen-to-square mr-2"></i> Edit Profile</button>
                            <button className='hidden text-xs md:text-sm font-medium bg-orange-600 text-white px-5 md:px-6 py-3 rounded-lg shadow-lg'><i class="fa-solid fa-cloud-arrow-up mr-2"></i> Follow </button>
                            <button className='hidden text-xs md:text-sm font-medium border-orange-600 border text-orange-600 px-5 md:px-6 py-3 rounded-lg shadow-lg'><i class="fa-solid fa-cloud-arrow-up mr-2"></i> UnFollow</button>
                        </div>
                    </div>
                </section>


                <section className="md:flex gap-6 space-y-6 md:space-y-0">

                    <div className='shadow shadow-slate-400 rounded-lg p-5 w-full md:w-80 h-max'>
                        <h2 className='font-bold text-lg'>INTRO</h2>
                        <div className='my-4 space-y-3'>

                            <div className='flex gap-3 items-center'>
                                <p> <i class="fa-solid fa-globe text-orange-600"></i></p>
                                <p className='font-semibold'>www.lilmow.com</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <p> <i class="fa-solid fa-circle-user text-orange-600"></i></p>
                                <p className='font-semibold'>Male</p>
                            </div>

                            <div className='flex gap-3 items-center'>
                                <p> <i class="fa-solid fa-cake-candles text-orange-600"></i></p>
                                <p className='font-semibold'>Born 26 june,2004</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <p> <i class="fa-solid fa-location-dot text-orange-600"></i></p>
                                <p className='font-semibold'>VI, Nigeria</p>
                            </div>

                            <p className='font-semibold'>100,677 Followers</p>
                            <p className='font-semibold'>677 Following</p>
                        </div>
                        <button className='text-center font-semibold bg-orange-600  text-white p-4 w-full rounded-xl shadow shadow-orange-300'>Edit Details</button>
                    </div>

                    <div  className='w-full md:w-3/5'>
                        <Feeds/>
                    </div>

                    <div  className='w-1/5 h-max hidden xl:block'>
                        <Activity/>
                    </div>
                </section>
            </section>


        </>
    )
}