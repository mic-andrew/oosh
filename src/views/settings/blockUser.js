import cvdp from '../../assets/dpcv.png'



export const BlockUser = () => {

    return (
        <>

            <section className="p-4 md:p-8">
                <h2 className="text-2xl font-bold text-orange-600">Blocked User</h2>
                <p className="2xl:w-2/3">Once you block someone, that person can no longer see things you post on your timeline, tag you,
                    invite you to events or groups, start a conversion with you, or add you as a friend. Note: Does not
                    include groups you both participate in. </p>

                <div className='py-8 space-y-6'>
                    <div className='flex-1'>
                        <div className="flex flex-1 ">
                            <div className="relative w-full max-w-xl  focus-within:text-orange-600 text-blue-700">
                                <div className="absolute inset-y-0 flex items-center pl-2">
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input className="w-full pl-8 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Type a name..." aria-label="Search" />
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-lg font-bold ">Block user list</h2>

                        <div className='mt-4 space-y-4'>
                            <div className="flex justify-between w-full items-center md:w-2/3 2xl:w-1/3">
                                <div className='flex gap-3'>
                                    <div>
                                        <img src={cvdp} alt="image" className='w-12' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-semibold'>James Robert</h2>
                                        <p className='text-sm'>Blocked .26/03/2021</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='text-white bg-orange-600 px-4 py-2 rounded text-sm md:text-base'>Unblock</button>
                                </div>
                            </div>

                            <div className="flex justify-between w-full items-center md:w-2/3 2xl:w-1/3">
                                <div className='flex gap-3'>
                                    <div>
                                        <img src={cvdp} alt="image" className='w-12' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-semibold'>James Robert</h2>
                                        <p className='text-sm'>Blocked .26/03/2021</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='text-white bg-orange-600 px-4 py-2 rounded text-sm md:text-base'>Unblock</button>
                                </div>
                            </div>


                            <div className="flex justify-between w-full items-center md:w-2/3 2xl:w-1/3">
                                <div className='flex gap-3'>
                                    <div>
                                        <img src={cvdp} alt="image" className='w-12' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-semibold'>James Robert</h2>
                                        <p className='text-sm'>Blocked .26/03/2021</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='text-white bg-orange-600 px-4 py-2 rounded text-sm md:text-base'>Unblock</button>
                                </div>
                            </div>


                            <div className="flex justify-between w-full items-center md:w-2/3 2xl:w-1/3">
                                <div className='flex gap-3'>
                                    <div>
                                        <img src={cvdp} alt="image" className='w-12' />
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-semibold'>James Robert</h2>
                                        <p className='text-sm'>Blocked .26/03/2021</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='text-white bg-orange-600 px-4 py-2 rounded text-sm md:text-base'>Unblock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}