import dp from '../../assets/dp.png'





export const Feeds = () => {
    return (
        <>
            <section className='shadow shadow-slate-400 rounded-lg p-4 space-y-4'>
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
                    <div className='flex gap-1'>
                        <i className="fa-solid fa-video text-sm"></i>
                        <p className='text-sm'>Short Video</p>
                    </div>

                    <div className='flex gap-1'>
                        <i class="fa-solid fa-camera text-sm"></i>
                        <p className='text-sm'>Photo/Video</p>
                    </div>


                    <div className='flex gap-1'>
                        <i class="fa-regular fa-face-smile text-sm"></i>
                        <p className='text-sm'>Feeling</p>
                    </div>


                    <div className=''>
                        <button className='bg-orange-600 text-white px-3 py-1 rounded'>Post</button>
                    </div>
                </div>
            </section>

        </>
    )
}