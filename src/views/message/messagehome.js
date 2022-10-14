import { ChatSection } from "./chatSection"

import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import { MobileActiveChat } from "./mobileActiveChat"



export const MessageHome = () => {

    return (
        <>

            <main>
                <section className="xl:flex gap-10">

                    <section className="hidden xl:block fixed xl:h-[85%] xl:w-1/5 shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-4">
                        <div className="flex gap-2 justify-between items-center">
                            <div className="flex justify-center  ">
                                <div className="relative w-full focus-within:text-orange-600 text-blue-700">
                                    <div className="absolute inset-y-0 flex items-center pl-2">
                                        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input className="w-72 pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for something here..." aria-label="Search" />
                                </div>
                            </div>

                            <div>
                                <button className="bg-gray-200  rounded-md ">
                                    <i className="fa-solid fa-ellipsis-vertical text-orange-600 font-bold px-5 py-2"></i>
                                </button>
                            </div>
                        </div>


                        <div className='flex xl:block overflow-x-scroll xl:overflow-y-scroll xl:h-[95%] space-y-5 w-full px-2 py-5'>
                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img9} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>Abifoluwa Adepeju</p>
                                        <p className='text-xs'>Please i need the work in the..........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img7} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>David Adedamola</p>
                                        <p className='text-xs'>I will like us to start........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs hidden'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img7} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>David Adedamola</p>
                                        <p className='text-xs'>I will like us to start........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs hidden'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>


                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img7} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>David Adedamola</p>
                                        <p className='text-xs'>I will like us to start........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs hidden'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>


                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img9} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>Abifoluwa Adepeju</p>
                                        <p className='text-xs'>Please i need the work in the..........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img7} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>David Adedamola</p>
                                        <p className='text-xs'>I will like us to start........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs hidden'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>


                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img7} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>David Adedamola</p>
                                        <p className='text-xs'>I will like us to start........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs hidden'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>


                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img8} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>Abifoluwa Anuoluwapo</p>
                                        <p className='text-xs'>Please i need the work in the..........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img8} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>Abifoluwa Anuoluwapo</p>
                                        <p className='text-xs'>Please i need the work in the..........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img9} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>Abifoluwa Adepeju</p>
                                        <p className='text-xs'>Please i need the work in the..........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-3  cursor-pointer'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={img9} alt="imgae" className='rounded-full w-9' />
                                    </div>

                                    <div>
                                        <p className='text-sm font-bold'>Abifoluwa Adepeju</p>
                                        <p className='text-xs'>Please i need the work in the..........</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className='text-xs'>2 mins</p>
                                    <p className='text-xs'><i class="fa-solid fa-circle text-green-500 w-6 text-right"></i></p>
                                </div>
                            </div> 
                        </div>
                    </section>

                    <section className="xl:hidden block  h-[85%] fixed w-[90%] mx-auto shadow shadow-slate-400 rounded-lg py-4 px-3">
                        <MobileActiveChat />
                    </section>

                    <section className="hidden xl:block fixed xl:h-[85%] w-[100%] xl:w-[57%] xl:ml-[22%] xl:mt-0 shadow shadow-slate-400 rounded-lg py-4  2xl:px-8">
                        <ChatSection />
                    </section>
                </section>
            </main>

        </>
    )
}