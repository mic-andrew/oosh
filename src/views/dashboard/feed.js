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
                        <div class="grid grid-cols-2 gap-1.5 md:gap-4">
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

                        <div className='flex justify-between items-center border-b pb-4'>
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

                            <div className=' flex gap-3 md:gap-10 text-xs md:text-sm font-semibold text-slate-700'>
                                <button className='flex space-x-2 items-center'>
                                    <i class="fa-solid fa-thumbs-up text-red-600"></i>
                                    <p>9K <span className='hidden md:inline-flex'>Like</span></p>
                                </button>

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

                        <div className="flex gap-x-3 items-center justify-between">
                            <div>
                                <img src={dp} alt="img" className='w-12 rounded-full' />
                            </div>

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
                                        <input className="w-full pl-3 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Write a comment..." aria-label="Search" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-5 h-5">
                                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                </svg>

                            </div>
                        </div>
                    </div>











                </section>


















            </section>

        </>
    )
}