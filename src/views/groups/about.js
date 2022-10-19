import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'


export const About = () => {
    return (
        <>

            <section className="space-y-8">
                <section className='shadow shadow-slate-400 rounded-lg'>
                    <div className='border-b py-4   px-4 md:px-6 2xl:px-8'>
                        <p className='md:text-2xl font-bold'>About this group</p>
                    </div>

                    <div className="py-4 px-4 md:px-6 2xl:px-8">
                        <h2 className="text-2xl font-semibold">Goals/objectives of lilmow Connect </h2>
                        <p>To help people help each other by providing Peer Support</p>

                        <div>
                            <div className="flex gap-3 items-center space-y-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">Public</p>
                                    <p className="text-sm">Anyone can see who’s in the group</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center space-y-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">Visible</p>
                                    <p className="text-sm">Anyone can see who’s in the group.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center space-y-4">
                                <div>
                                    <i class="fa-solid fa-users"></i>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">General</p>
                                    <p className="text-sm">Anyone can find this group.</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center space-y-4">
                                <div>
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">History</p>
                                    <p className="text-sm">Group created on march 26, 2022</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>


                <section className='shadow shadow-slate-400 rounded-lg'>
                    <div className='border-b py-4   px-4 md:px-6 2xl:px-8'>
                        <p className='md:text-2xl font-bold'>Members 1094</p>
                    </div>

                    <div className="py-4 px-4 md:px-6 2xl:px-8 space-y-4">
                        <div className="flex gap-5">
                            <div><img src={img8} alt="image" className="rounded-full"/></div>
                            <div><img src={img7} alt="image" className="rounded-full"/></div>
                            <div><img src={img9} alt="image" className="rounded-full"/></div>
                        </div>
                        <p className='text-lg font-semibold'>Ayo and lilmow are admins. Emmalu is a moderarator</p>
                        <button className='text-white bg-orange-600 px-6 py-3 rounded-lg  w-40'>See all</button>
                    </div>
                </section>








            </section>




        </>
    )
}