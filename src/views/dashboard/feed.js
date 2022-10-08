import dp from '../../assets/dp.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'



export const Feeds = () => {
    return (
        <>
            <section className='space-y-6'>
                <section className='shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8 space-y-4'>
                    <div className="flex space-x-6 items-center justify-center">
                        <div>
                            <img src={dp} alt="img" className='w-12 rounded-full' />
                        </div>

                        <div className='flex-1'>
                            <div className="flex justify-center flex-1 ">
                                <div className="relative w-full max-w-xl  focus-within:text-orange-600 text-blue-700">
                                    <div className="absolute inset-y-0 flex items-center pl-2">
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input className="w-full pl-8 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for something here..." aria-label="Search" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-1 md:gap-2 items-center'>
                            <i className="fa-solid fa-video text-sm md:text-base"></i>
                            <p className='text-xs md:text-sm'>Short Video</p>
                        </div>

                        <div className='flex gap-1 md:gap-2 items-center'>
                            <i class="fa-solid fa-camera text-sm md:text-base"></i>
                            <p className='text-xs md:text-sm'>Photo/Video</p>
                        </div>


                        <div className='flex gap-1 md:gap-2 items-center'>
                            <i class="fa-regular fa-face-smile text-sm md:text-base"></i>
                            <p className='text-xs md:text-sm'>Feeling</p>
                        </div>


                        <div className=''>
                            <button className='bg-orange-600 text-white px-3 py-1 rounded'>Post</button>
                        </div>
                    </div>
                </section>

                <section className='shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8 space-y-4'>
                    <div className='space-y-3'>
                        <div className="flex gap-3 items-center">
                            <div>
                                <img src={dp} alt="img" className='w-10 rounded-full' />
                            </div>

                            <div>
                                <p className='text-lg font-bold'>David Sam</p>
                                <p className='text-xs'>1hr public</p>
                            </div>
                        </div>

                        <p className='font-medium text-slate-700 '>Always take the scenic route. I do believe it's time for another adventure.
                            Beach more, Worry less. I need a vacation so long;</p>
                    </div>


                    <div className='space-y-4'>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <img src={img1} alt="welcome" className=' rounded-lg lg:rounded-xl' />
                            </div>
                            <div>
                                <img src={img2} alt="welcome" className=' rounded-lg lg:rounded-xl' />
                            </div>
                            <div>
                                <img src={img3} alt="welcome" className=' rounded-lg lg:rounded-xl' />
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <div className='w-1/6 mx-auto'>
                                    <img src={pp1} alt="" className='w-6  2xl:w-full mx-auto' />
                                </div>
                                <div className='w-1/6 mx-auto'>
                                    <img src={pp2} alt="" className='w-6 2xl:w-full mx-auto' />
                                </div>
                                <div className='w-1/6 mx-auto'>
                                    <img src={pp3} alt="" className='w-6 2xl:w-full mx-auto' />
                                </div>
                                <div className='w-1/6'>
                                    <img src={pp4} alt="" className='w-6 2xl:w-full mx-auto' />
                                </div>
                                <div className='w-1/6'>
                                    <img src={pp5} alt="" className='w-6 2xl:w-full mx-auto' />
                                </div>
                                <div className='w-1/6'>
                                    <img src={pp6} alt="" className='w-6 2xl:w-full mx-auto' />
                                </div>
                            </div>

                            <div className='flex gap-3 md:gap-10 text-xs md:text-sm font-semibold text-slate-700'>
                                <div className='flex space-x-2 items-center'>
                                    <i class="fa-solid fa-comment-dots"></i>
                                    <p>15K <span className='hidden md:inline-flex'>Comments</span></p> 
                                </div>

                                <button className='flex space-x-2 items-center'>
                                <i class="fa-solid fa-share"></i>
                                <p>9K <span className='hidden md:inline-flex'>Share</span></p>
                                </button>
                            </div>
                        </div>
                    </div>









                </section>


















            </section>

        </>
    )
}